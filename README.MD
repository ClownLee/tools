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

- example findParentTree

```javascript
  let tree = [
    {id: 1, label: 1, children: [
      {id: 2, label: 2},
      {id: 3, label: 3},
      {id: 4, label: 4},
      {id: 5, label: 5, children: [
        {id: 6, label: 6},
        {id: 7, label: 7, children: [
          {id: 12, label: 12, children: [
            {id: 13, label: 13},
            {id: 14, label: 14},
            {id: 15, label: 15, children: [
              {id: 17, label: 17},
            ]},
            {id: 16, label: 16},
          ]}
        ]}
      ]},
    ]},
    {id: 8, label: 8},
    {id: 9, label: 9, children: [
      {id: 10, label: 10},
      {id: 11, label: 11}
    ]}
  ]

  const demo = tools.arr.findParentTree(tree, 17, {
    id_field: 'id',
    children_field: 'children'
  })

  console.log(demo)
  /*
    [
      { id: 1, label: 1, pid: undefined },
      { id: 5, label: 5, pid: 1 },
      { id: 7, label: 7, pid: 5 },
      { id: 12, label: 12, pid: 7 },
      { id: 15, label: 15, pid: 12 },
      { id: 17, label: 17, pid: 15 }
    ]
  */
```

- Through son_ Id find its ancestral home
 - example findParentArr

```javascript
  let arr = [
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

  const demo = tools.arr.findParentArr(arr, 11, {
    id_field: 'value',
    pid_field: 'parant_id'
  })
  console.log(demo)
  /*
    [
      { value: 9, label: 9, parant_id: undefined },
      { value: 11, label: 11, parant_id: 9 }
    ]
  */
```

- example deepClone
```javascript
  import tools from '@clownlee/tools'

  const newArr = tools.arr.deepClone(arr)
```

- example html.encode
 - Neet window.document
```javascript
  import tools from '@clownlee/tools'

  const html = '<div><h1>哈哈哈哈</h1><h2>嘿嘿嘿嘿</h2></div>'
  const text = tools.html.encode(html)

  // text = &lt;div&gt;&lt;h1&gt;哈哈哈哈&lt;/h1&gt;&lt;h2&gt;嘿嘿嘿嘿&lt;/h2&gt;&lt;/div&gt;
```

- example html.decode
 - Neet window.document
```javascript
  import tools from '@clownlee/tools'

  const text = '&lt;div&gt;&lt;h1&gt;哈哈哈哈&lt;/h1&gt;&lt;h2&gt;嘿嘿嘿嘿&lt;/h2&gt;&lt;/div&gt;'
  const html = tools.html.decode(text)
  
  // html = <div><h1>哈哈哈哈</h1><h2>嘿嘿嘿嘿</h2></div>
```

