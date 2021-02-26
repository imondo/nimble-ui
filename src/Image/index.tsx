import React, { useEffect, useState } from 'react';

interface IImageprops {
  src: string;
  loading: boolean;
  error: any;
}

// 图片 src async 获取
const getAsyncImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

function useImage({ src }: { src: string }): IImageprops {
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    getAsyncImage(src)
      .then(() => {
        setLoding(false);
        setValue(src);
      })
      .catch(error => {
        setError(error);
        setLoding(false);
      });
  }, [src]);

  return {
    loading,
    error,
    src: value,
  };
}

function ImageLoad({ src = '', loading = null, error = null }) {
  const { loading: isLoading, error: err, src: url } = useImage({ src });
  if (url) {
    return <img src={src} alt="" />;
  }
  if (isLoading) {
    return loading;
  }
  if (err) {
    return error;
  }
  return null;
}

export default ImageLoad;
