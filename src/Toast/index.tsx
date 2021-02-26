import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const contentIsToastProps = (content: any): content is ToastProps =>
  typeof content === 'object' && 'content' in content;

interface ToastProps {
  delay?: number;
  content?: ReactNode | string;
  visible?: boolean;
  close?: () => void;
}

function useContainer() {
  const container: HTMLElement = document.createElement('div');
  container.classList.add('totast__wrapper');
  document.body.appendChild(container);
  return container;
}

function show(props: ToastProps | ReactNode) {
  const defaultProps: ToastProps = {
    delay: 1500,
  };

  const container = useContainer();

  const _props = contentIsToastProps(props)
    ? { ...defaultProps, ...props }
    : { ...defaultProps, content: props };

  const { content, close = () => {} } = _props;

  ReactDOM.render(
    <div className="totast__container">{content}</div>,
    container,
  );

  setTimeout(() => {
    document.body.removeChild(container);
    close();
  }, _props.delay);
}

export default { show };
