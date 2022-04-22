const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;

const encode = (html) => {
  var temp = document.createElement("div");
  (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
  var output = temp.innerHTML;
  temp = null;
  return output;
}

const decode = (text) => {
  var temp = document.createElement("div");
  temp.innerHTML = text;
  var output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}

export default {
  encode,
  decode
}
