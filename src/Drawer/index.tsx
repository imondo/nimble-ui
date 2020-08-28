import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';

const _container = document.createElement('div');
_container.classList.add('drawer__wrapper');

export default (props: any) => {
  const [defaultHeight, setDefaultHeight] = useState('auto');

  const { position = 'center' } = props;

  const [visible, setVisible] = useState(props.open);

  useEffect(() => {
    setVisible(props.open);
  }, [props.open]);

  useEffect(() => {
    document.body.appendChild(_container);
    if (visible) {
      document.body.classList.add('overflow-hidden');

      if (['top', 'bottom', 'center'].includes(position) || !position) {
        setDefaultHeight(props.height || 'auto');
      } else {
        setDefaultHeight('100%');
      }
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.removeChild(_container);
    }
  }, [visible]);

  const onClose = () => {
    setVisible(false);
    if (props.onClose) {
      props.onClose && props.onClose();
    } else {
      console.warn('请确保添加关闭回调函数!');
    }
  };

  return (
    visible &&
    createPortal(
      <div className={`drawer drawer-open`}>
        <div
          className={`drawer-body ${
            position ? 'drawer-body--' + position : 'drawer-body--center'
          } ${visible ? 'drawer-body-open--' + position : ''}`}
          style={{ height: `${defaultHeight}` }}
        >
          {props.children}
        </div>
        <div className="drawer-overlay" onClick={e => onClose()}></div>
      </div>,
      _container,
    )
  );
};
