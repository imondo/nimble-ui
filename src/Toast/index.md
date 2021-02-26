---
nav:
  title: 组件
  path: /components
---

## Toast

轻提示

Demo:

```tsx
import React from 'react';
import { Toast } from 'rqk-ui';

export default () => {
  return (
    <div>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          Toast.show('普通 Toast');
        }}
      >
        普通
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          Toast.show(
            <div className="box">
              <div className="box-text">😂</div>
              <div className="box-text">自定义 Toast</div>
            </div>,
          );
        }}
      >
        自定义内容
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          Toast.show({
            delay: 3000,
            content: '指定停留时间 3s',
          });
        }}
      >
        指定停留时间
      </button>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          Toast.show({
            delay: 1500,
            content: '关闭后回调',
            close: () => {
              Toast.show('Toast 关闭了');
            },
          });
        }}
      >
        关闭后回调
      </button>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle

## API

| 参数    | 说明                               | 类型       | 默认值 |
| ------- | ---------------------------------- | ---------- | ------ |
| delay   | 自动关闭前停留的时间（单位：毫秒） | number     | `3000` |
| content | 显示的内容                         | ReactNode  | -      |
| close   | Toast 隐藏后的回调函数             | () => void | -      |
