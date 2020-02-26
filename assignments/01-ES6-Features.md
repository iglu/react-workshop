# ES6 Features

## Guidelines

[https://www.taniarascia.com/es6-syntax-and-feature-overview/](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

### Variables and constant feature comparison

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#variables-and-constant-feature-comparison](https://www.taniarascia.com/es6-syntax-and-feature-overview/#variables-and-constant-feature-comparison)

```
    var x = 0
    let y = 0
    const z = 0
```

### Template literals

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#template-literals](https://www.taniarascia.com/es6-syntax-and-feature-overview/#template-literals)

```
    let str = `Release Date: ${date}`
    let str = `This text
            is on
            multiple lines`
```

### Arrow function syntax

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#variables-and-constant-feature-comparison](https://www.taniarascia.com/es6-syntax-and-feature-overview/#variables-and-constant-feature-comparison)

```
    const func = a => {} // parentheses optional with one parameter
    const func = (a, b, c) => {} // parentheses required with multiple parameters
    const func = a => a + a; // curly braces with return optional when inline
```

### Destructuring (object matching)

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#destructuring-object-matching](https://www.taniarascia.com/es6-syntax-and-feature-overview/#destructuring-object-matching)

```
    const obj = { a: 1, b: 2, c: 3 }
    const { a, b, c } = obj
```

### Spread syntax

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#destructuring-object-matching](https://www.taniarascia.com/es6-syntax-and-feature-overview/#destructuring-object-matching)

```
    let arr1 = [1, 2, 3]
    let arr2 = ['a', 'b', 'c']
    let arr3 = [...arr1, ...arr2]

    console.log(arr3) // [1, 2, 3, "a", "b", "c"]
```

### Modules - export/import

[https://www.taniarascia.com/es6-syntax-and-feature-overview/#modules---exportimport](https://www.taniarascia.com/es6-syntax-and-feature-overview/#modules---exportimport)

```
    let func = a => a + a
    let obj = {}
    let x = 0

    export { func, obj }
    export default x
```

```
    import x, { func, obj} from './export.js'
    console.log(func(3), obj, x)
```
