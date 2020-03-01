module.exports = function repeater(str, options) {
    function repeatStringWithSeparator(str, sep, times) {
        return times ? Array(times).fill(str).join(sep) : str;
    }

    let mainString = String(str);
    let additionString = options.addition === undefined ? "" : String(options.addition);
    let separator = options.separator ? options.separator : '+';
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

    return repeatStringWithSeparator(
        mainString +
        repeatStringWithSeparator(additionString, additionSeparator, options.additionRepeatTimes),
        separator,
        options.repeatTimes
    );
};