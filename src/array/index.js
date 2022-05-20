/**
 * 数组转Tree
 * @param {*} items 数组
 * @param {*} options 字段指定与配置
 * @returns 返回值
 */
const arrayToTree = (items, options = {}) => {
  if (!options.id_field) options.id_field = 'id'
  if (!options.pid_field) options.pid_field = 'pid'
  if (!options.children_field) options.children_field = 'children'

  const { id_field, pid_field, children_field } = options

  const findFun = function(parent, child) {
    return parent[id_field] == child[pid_field];
  }

  let tree = {};
  for (let item of items) {
    let ptr = items.find(parent => findFun(parent, item));
    if (ptr === undefined) ptr = tree;
    if (!ptr[children_field]) {
    ptr[children_field] = [];
    }
    delete item[pid_field];
    ptr[children_field].push(item);
  }
  return tree[children_field] || [];
}
  
/**
 * 私有方法 - 拆分Tree的Children
 * @param {*} node 拆分节点
 * @param {*} items 容器
 * @param {*} options 配置数据
 * @param {*} parent_id 顶级父级id
 */
const treeToArray_visitNode = (node, items, options, parent_id) => {
  const { id_field, pid_field, children_field } = options

  node[pid_field] = parent_id;
  items.push(node);
  if (node[children_field]) {
    for (let child of node[children_field]) {
      treeToArray_visitNode(child, items, options, node[id_field]);
    }
  }
  delete node[children_field];
}

/**
 * Tree转数组
 * @param {*} tree 原数据 
 * @param {*} options 配置数据
 * @returns 返回值
 */
const treeToArray = (tree, options = {}) => {
  if (!options.id_field) options.id_field = 'id'
  if (!options.pid_field) options.pid_field = 'pid'
  if (!options.children_field) optcions.children_field = 'children'
  
  var items = [];
  for (let node of tree) {
    treeToArray_visitNode(node, items, options, undefined);
  }
  return items;
}

/**
 * 数组（对象）深度克隆
 * @param {*} obj 
 * @returns 
 */
const deepClone = (obj) => {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for(let key in obj){
      if (obj[key] && typeof obj[key] === 'object'){
        bjClone[key] = deepClone(obj[key]);
      }else{
        objClone[key] = obj[key]
      }
    }
  }
  return objClone;
}

/**
 * 私有方法-通过子id 获取祖级
 * @param {*} arr 原数组
 * @param {*} id 子id
 * @param {*} items 容器
 * @param {*} options 配置数据
 */
const getParent = (arr, id, items, options) => {
  const { id_field, pid_field } = options
  const tmp = arr.filter((i) => i[id_field] == id)[0]

  if(tmp && tmp[pid_field]) {
    items.unshift(tmp)
    getParent(arr, tmp[pid_field], items, options)
  }else {
    items.unshift(tmp)
  }

}

/**
 * 在 Tree 中获取指定子id的祖级数据
 * @param {*} tree 原数据-Tree
 * @param {*} son_id 子id
 * @param {*} options 配置数据
 * @returns 
 */
const findParentTree = (tree, son_id, options = {}) => {
  if (!options.id_field) options.id_field = 'id'
  if (!options.pid_field) options.pid_field = 'pid'
  if (!options.children_field) options.children_field = 'children'
  const { id_field, pid_field } = options

  const arr = treeToArray(tree, options)
  const items = []
  const tmp = arr.filter( i => i[id_field] == son_id)[0]
  if (tmp) {
    items.unshift(tmp)
    getParent(arr, tmp[pid_field], items, options)
  }

  return items
}

/**
 * 在数组中获取指定子id的祖级数据
 * @param {*} arr 原数据-数组
 * @param {*} son_id 子id
 * @param {*} options 配置数据
 * @returns 
 */
const findParentArr = (arr, son_id, options = {}) => {
  if (!options.id_field) options.id_field = 'id'
  if (!options.pid_field) options.pid_field = 'pid'
  const { id_field, pid_field } = options

  const items = []
  const tmp = arr.filter( i => i[id_field] == son_id)[0]
  if (tmp) {
    items.unshift(tmp)
    getParent(arr, tmp[pid_field], items, options)
  }

  return items
}

export default { arrayToTree, treeToArray, findParentTree, findParentArr, deepClone }
