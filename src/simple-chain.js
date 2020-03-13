
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let newValue = '( ' + value + ' )';
    this.chain.push(newValue);
    return this;
  },
  removeLink(position) {
    if (typeof (position) != "number") {
      this.chain = [];
      throw new Error();
    }
    if (this.chain.length < position || position <= 0) {
      this.chain = [];
      throw new Error();
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {

    str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
