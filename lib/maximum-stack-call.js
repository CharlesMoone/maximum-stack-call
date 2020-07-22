export default class {
  /**
   * 如果 !data 为 true，则表明要清空堆栈
   * 否则压数据入栈，如果栈内元素超过 20，调用立即上报函数
   */
  __setMaximumStack(data) {
    if (!data) {
      this.maximumStack = [];
    } else {
      const maximumStack = this.__getMaximumStack();
      this.maximumStack = [].concat(maximumStack, data);
      if (this.maximumStack.length > this.options.oversize) {
        this._immediately();
      }
    }
  }

  __getMaximumStack() {
    return this.maximumStack || [];
  }

  constructor(callback, options = {}) {
    this.options = {
      delayTime: 3000,
      oversize: 20,
      ...options,
    };

    this.callback = callback;

    this._startTimeout();
  }

  push(data) {
    this.__setMaximumStack(data);
  }

  clear() {
    this.__setMaximumStack(null);
  }

  _startTimeout() {
    this.__timeout = window.setTimeout(() => {
      this.__beforeCallback();
    }, this.options.delayTime);
  }

  _immediately() {
    window.clearTimeout(this.__timeout);
    this.__beforeCallback();
  }

  __beforeCallback() {
    const maximumStack = [...this.__getMaximumStack()];
    this.callback(maximumStack);
    this.clear();
  }
}
