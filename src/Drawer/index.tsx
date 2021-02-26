import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';
import './index.less';

export default (props: any) => {
  const { position = 'center', visible, node, height } = props;
  const { onClose } = props;

  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden');
    }
  }, [visible]);

  const hasHeight = ['top', 'bottom'].includes(position);

  // 关闭事件
  const _onClose = () => {
    document.body.classList.remove('overflow-hidden');
    if (onClose) {
      onClose && onClose();
    } else {
      console.warn('请确保添加关闭回调函数!');
    }
  };

  return (
    <Portal node={node}>
      <div className={`drawer drawer-open`}>
        <CSSTransition
          appear
          unmountOnExit
          in={visible}
          timeout={300}
          classNames={`drawer-${position || 'center'}`}
        >
          <div
            className={`drawer-body drawer-body--${position || 'center'}`}
            style={{ height: hasHeight && height ? height : '' }}
          >
            {props.children}
          </div>
        </CSSTransition>
        <CSSTransition
          appear
          unmountOnExit
          in={visible}
          timeout={300}
          classNames="drawer-fade"
        >
          <div className="drawer-overlay" onClick={_onClose}></div>
        </CSSTransition>
      </div>
    </Portal>
  );
};
