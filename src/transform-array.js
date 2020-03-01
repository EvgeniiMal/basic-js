module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('arr is not Array');

    let controller = {
        '--double-next': (index) => {
            arr[index + 1] !== undefined ? arr[index] = arr[index + 1] : arr.splice(index, 1);
         },
        '--double-prev': (index) => {
            arr[index - 1] !== undefined ? arr[index] = arr[index - 1] : arr.splice(index, 1);
        },
        '--discard-next': (index) => {
            arr[index + 1] !== undefined ? arr.splice(index, 2) : arr.splice(index, 1);
        },
        '--discard-prev':  (index) => {
            arr[index - 1] !== undefined ? arr.splice(index - 1, 2) : arr.splice(index, 1); 
        }
    };

    for (let [flag, controlFunction] of Object.entries(controller)) {
       if(arr.indexOf(flag) != -1){
        controlFunction.call(this, arr.indexOf(flag));
        transform(arr);
       }
    }

    return arr;
};
