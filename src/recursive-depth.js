module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        return arr.some(el => Array.isArray(el)) ? depth + this.calculateDepth(arr.flat()) : depth;
    }
}