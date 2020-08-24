import React from 'react';
import "./index.less"

export default (props: any) => {
  return <div className="divider divider--hairline divider--content-center">
    { props.text ? props.text : '我已经到底了' }
  </div>
}