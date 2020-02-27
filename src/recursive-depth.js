module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return arr.some(el => Array.isArray(el)) ? 1 + this.calculateDepth(arr.flat()) : 1;
    }
}