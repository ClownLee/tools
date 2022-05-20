/**
 * html 标签转义
 * @param {*} html 
 * @returns 
 */
const encode = (html) => {
  var temp = window.document.createElement("div")
  temp.textContent ? (temp.textContent = html) : (temp.innerText = html)
  var output = temp.innerHTML
  temp = null
  return output
}

/**
 * html 标签反转义
 * @param {*} text 
 * @returns 
 */
const decode = (text) => {
  var temp = window.document.createElement("div")
  temp.innerHTML = text
  var output = temp.innerText || temp.textContent
  temp = null
  return output
}

export default { encode, decode }
