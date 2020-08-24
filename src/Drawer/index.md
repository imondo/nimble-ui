---
nav:
  title: 组件
  path: /components
---

## Drawer

抽屉

Demo:

```tsx
import React, { useState } from 'react';
import { Drawer } from 'rqk-ui';

export default () => {
  const [isChange, setChange] = useState(false);
  const [position, setPosition] = useState('');

  return <div>
    <button onClick={e => {setPosition('');setChange(true)}}>默认 Drawer</button>
    <button onClick={e => {setPosition('left'); setChange(true)}}>左边弹出 Drawer</button>
    <button onClick={e => {setPosition('right'); setChange(true)}}>右边弹出 Drawer</button>
    <button onClick={e => {setPosition('top'); setChange(true)}}>顶部弹出 Drawer</button>
    <button onClick={e => {setPosition('bottom'); setChange(true)}}>底部弹出 Drawer</button>
    <Drawer open={isChange} position={position} close={e => setChange(false)}/>
  </div>
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
