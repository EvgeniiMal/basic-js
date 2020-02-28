let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(value !== undefined ? `( ${String(value)} )` : '( )');
    return this;
  },
  removeLink(position) {
    let len = chain.length;
    position--;
    if (Number.isInteger(position) && position <= --len && position >= 0) {
      chain.splice(position, 1);
      return this;
    } else {
      chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    chainString = chain.join('~~');
    chain = [];
    return chainString;
  }
};


module.exports = chainMaker;
