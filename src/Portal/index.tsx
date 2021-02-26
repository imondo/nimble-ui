import { PropsWithChildren, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = PropsWithChildren<{
  node?: HTMLElement;
}>;

const Portal = ({ node, children }: PortalProps) => {
  // 使用ref记录内部创建的节点 初始值为null
  const defaultNodeRef = useRef<HTMLElement | null>(null);

  // 组件卸载时 移除该节点
  useEffect(
    () => () => {
      if (defaultNodeRef.current) {
        document.body.removeChild(defaultNodeRef.current);
      }
    },
    [],
  );

  // 若用户未传入节点，Portal也未创建节点，则创建节点并添加至body
  if (!node && !defaultNodeRef.current) {
    const defaultNode = document.createElement('div');
    defaultNode.className = 'portal__wrapper';
    defaultNodeRef.current = defaultNode;
    document.body.appendChild(defaultNode);
  }

  return createPortal(children, (node || defaultNodeRef.current)!);
};

export default Portal;
