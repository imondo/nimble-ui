---
nav:
  title: 组件
  path: /components
---

## Image

图片组件

Demo:

```tsx
import React from 'react';
import { Image } from 'rqk-ui';

export default () => {
  const [src, setSrc] = React.useState('');
  const [errSrc, setError] = React.useState('');
  return (
    <div>
      <button
        onClick={() => {
          setSrc(
            'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
          );
        }}
      >
        加载图片
      </button>
      <button
        onClick={() => {
          setError('https://user-images.gith.pg');
        }}
      >
        加载错误
      </button>
      <div>
        {src && (
          <Image
            src={src}
            loading={<p>图片加载中...</p>}
            error={<p>图片加载错误</p>}
          />
        )}
      </div>
      <div>
        {errSrc && (
          <Image
            src={errSrc}
            loading={<p>图片加载中...</p>}
            error={<p>图片加载错误</p>}
          />
        )}
      </div>
    </div>
  );
};
```

## API

| 参数    | 说明             | 类型      | 默认值 |
| ------- | ---------------- | --------- | ------ |
| src     | 图片路径         | string    | -      |
| loading | 图片加载中占位   | ReactNode | -      |
| error   | 图片加载失败占位 | ReactNode | -      |
