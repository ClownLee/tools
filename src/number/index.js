/**
 * 数字转千分位
 * @param {Number | string} number 数字
 * @returns {string} 千分位数字
 */
function thousandth(number = '') {
    number = `${ number }`;
    number = number.split('.');
    number[0] = number[0].replace(/(?=\B(\d{3})+$)/g, ',');
    return number.join('.');
  }

  export default { thousandth }