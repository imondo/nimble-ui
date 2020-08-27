---
nav:
  title: 组件
  path: /components
---

## Drawer

抽屉

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`

Demo:

```tsx
import React, { useState } from 'react';
import { Drawer } from 'rqk-ui';

export default () => {
  const [isChange, setChange] = useState(false);
  const [position, setPosition] = useState('');

  return (
    <div>
      <button
        style={{ margin: '10px' }}
        onClick={e => {
          setPosition('');
          setChange(true);
        }}
      >
        默认 Drawer
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={e => {
          setPosition('left');
          setChange(true);
        }}
      >
        左边弹出 Drawer
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={e => {
          setPosition('right');
          setChange(true);
        }}
      >
        右边弹出 Drawer
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={e => {
          setPosition('top');
          setChange(true);
        }}
      >
        顶部弹出 Drawer
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={e => {
          setPosition('bottom');
          setChange(true);
        }}
      >
        底部弹出 Drawer
      </button>
      <Drawer open={isChange} position={position} close={e => setChange(false)}>
        <button style={{margin: '20px 20px 300px'}}>抽屉</button>
      </Drawer>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle

## API

| 参数     | 说明                                             | 类型    | 默认值   |
| -------- | ------------------------------------------------ | ------- | -------- |
| open     | 是否显示抽屉                                     | boolean | `false`  |
| height   | 抽屉自定义高度                                   | string  | ''       |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | string  | `center` |
| close    | 关闭抽屉                                         | event   | `void`   |
