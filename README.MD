- example treeToArray
```javascript
  import tools from '@clownlee/tools'

  const tree = [
    {value: 1, label: 1, children: [
      {value: 2, label: 2},
      {value: 3, label: 3},
      {value: 4, label: 4},
      {value: 5, label: 5, children: [
        {value: 6, label: 6},
        {value: 7, label: 7}
      ]},
    ]},
    {value: 8, label: 8},
    {value: 9, label: 9, children: [
      {value: 10, label: 10},
      {value: 11, label: 11}
    ]}
  ]

  const arr = tools.arr.treeToArray(tree, {
    id_field: 'value',
    pid_field: 'parant_id',
    children_field: 'children'
  })

```

- example arrayToTree
```javascript
  import tools from '@clownlee/tools'

  const arr = [
    { value: 1, label: 1, parant_id: undefined },
    { value: 2, label: 2, parant_id: 1 },        
    { value: 3, label: 3, parant_id: 1 },        
    { value: 4, label: 4, parant_id: 1 },        
    { value: 5, label: 5, parant_id: 1 },        
    { value: 6, label: 6, parant_id: 5 },        
    { value: 7, label: 7, parant_id: 5 },        
    { value: 8, label: 8, parant_id: undefined },
    { value: 9, label: 9, parant_id: undefined },
    { value: 10, label: 10, parant_id: 9 },      
    { value: 11, label: 11, parant_id: 9 }       
  ]

  const tree = tools.arr.arrayToTree(arr, {
    id_field: 'value',
    pid_field: 'parant_id',
    children_field: 'children'
  })

```

- example deepClone
```javascript
  import tools from '@clownlee/tools'

  const newArr = tools.arr.deepClone(arr)
```

