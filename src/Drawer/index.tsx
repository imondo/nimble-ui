import React, { useEffect, useState } from 'react';
import './index.less';

export default (props: any) => {

  const [defaultHeight, setDefaultHeight] = useState(props.height || '30%')

  useEffect(() => {
    if (props.open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    if (['right', 'left'].includes(props.position)) {
      setDefaultHeight('100%');
    } else {
      setDefaultHeight('30%');
    }

  });

  const onClickBody = (props: any) => {
    props.close();
    document.body.classList.remove("overflow-hidden");
  }

  

  return (
    <div className={`drawer ${props.open ? "drawer-open" : ""}`}>
      <div
        className={`drawer-body ${props.position ? 'drawer-body--' + props.position : 'drawer-body--default'}`}
        style={{ height: `${defaultHeight}` }}
      >
        {props.children}
      </div>
      <div className="drawer-overlay" onClick={e => onClickBody(props)}></div>
    </div>
  );
};
