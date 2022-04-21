const arrayToTree = (items, options) => {
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
  
const treeToArray = (tree, options) => {
  if (!options.id_field) options.id_field = 'id'
  if (!options.pid_field) options.pid_field = 'pid'
  if (!options.children_field) options.children_field = 'children'
  
  var items = [];
  for (let node of tree) {
    treeToArray_visitNode(node, items, options, undefined);
  }
  return items;
}
  
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

export default { arrayToTree, treeToArray, deepClone }