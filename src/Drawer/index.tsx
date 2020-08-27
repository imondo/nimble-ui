import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';

const _container = document.createElement('div');
_container.classList.add('drawer__wrapper');

export default (props: any) => {
  const [defaultHeight, setDefaultHeight] = useState(props.height);

  useEffect(() => {
    document.body.appendChild(_container);
    if (props.open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.removeChild(_container);
    }
  });

  const onClickBody = (props: any) => {
    props.close();
    document.body.classList.remove('overflow-hidden');
  };

  return (
    props.open &&
    createPortal(
      <div className={`drawer drawer-open`}>
        <div
          className={`drawer-body ${
            props.position
              ? 'drawer-body--' + props.position
              : 'drawer-body--default'
          } ${props.open ? 'drawer-body-open--' + props.position : ''}`}
          style={{ height: `${defaultHeight}` }}
        >
          {props.children}
        </div>
        <div className="drawer-overlay" onClick={e => onClickBody(props)}></div>
      </div>,
      _container,
    )
  );
};
