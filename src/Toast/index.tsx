import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const contentIsToastProps = (content: any): content is ToastProps =>
  typeof content === 'object' && 'content' in content;

interface ToastProps {
  delay?: number;
  content?: ReactNode | String;
  visible?: boolean;
  close?: () => void;
}

export default class Toast extends Component<ToastProps, any> {
  private static rqkToast: HTMLDivElement | null;

  private timer: any;

  static defaultProps: ToastProps = {
    delay: 3000,
    visible: false,
  };

  state = {
    visible: this.props.visible,
  };

  static show = (content: ReactNode | ToastProps) => {
    if (!Toast.rqkToast) {
      Toast.rqkToast = document.createElement('div');
      Toast.rqkToast.classList.add('totast__wrapper');
      document.body.appendChild(Toast.rqkToast);
    }
    if (Toast.rqkToast) {
      const props = contentIsToastProps(content)
        ? { ...Toast.defaultProps, ...content, visible: true }
        : { ...Toast.defaultProps, content, visible: true };
      ReactDOM.render(<Toast {...props} />, Toast.rqkToast);
    }
  };

  static hide = () => {
    if (Toast.rqkToast) {
      document.body.removeChild(Toast.rqkToast);
      Toast.rqkToast = null;
    }
  };

  // 关闭回调
  afterClose() {
    const { close } = this.props;
    if (typeof close === 'function') {
      close();
    }
  }

  autoClose() {
    const { delay } = this.props;
    if ((delay as Number) > 0) {
      this.timer = setTimeout(() => {
        Toast.hide();
        this.setState({
          visible: false,
        });
        clearTimeout(this.timer);
      }, delay);
    }
  }

  componentDidMount() {
    this.autoClose();
  }

  componentDidUpdate(prevProps: ReactNode | ToastProps) {
    const { visible } = this.state;
    if (prevProps !== visible) {
      if (visible === true) {
        this.setState({
          visible: true,
        });
        clearTimeout(this.timer);
      } else {
        Toast.hide();
        this.afterClose();
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { content } = this.props;
    return <div className="totast__container">{content}</div>;
  }
}
