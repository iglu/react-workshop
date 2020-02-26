# React Components

Guidelines below

## Assignments

### Assignment 1 - Button component with parameters

1. Open Button component (`src/components/Button.tsx`)
2. In that file basic button component is created. Add children, icon, variant and className parameters to it.
   Try to use Destructuring feature of ES6 to use them inside arrow function component.
3. Use those parameters in Button component return (inside JSX) to make Button more reusable.
   <details>
    <summary>Hint</summary>
    Children should be text of the button. <br/>
    Icon can be any icon of Material IO icons as string (https://material.io/resources/icons/?style=baseline) <br/>
    Variant should be used inside BEM function to add className `button--${variant}` <br/>
    </details>
4. Use your `<Button />` component in app.tsx after last `<NavLinkButton />` list item.
   Pass "add" as icon prop.
   Pass "Add New" as children.
   Pass "primary" as variant.
   We can use that button later to add new blog post.

### Assignment 2 - Button component CallBack prop

1. Add new onClick prop to your Button component and add it as `<button>` onclick handler.
2. Use that new prop in App.tsx to console.log("Adding new blog post!") on button click.

### Assignment 3 - Alert component

1. Create a new component file (`src/components/alert/alert.tsx`)
   Add interface and use it to create your Alert component

```ts
interface AlertProps {
  icon: string;
  type?: string;
}
```

2. Write new component Alert, which takes in Children and Icon parameter and outputs

```
    <div className="alert">
      <Icon className="alert__icon">/*This is Icon Name*/</Icon>
      <div className="alert__message">/*This is alert text that comes from children*/</div>
    </div>
```

3. Add it to top of your dashboard container component and check if it works. NB! Provide icon and children to Alert
4. Add new prop `type` to class, it should be optional prop.
5. Create BEM function to get alert className. If `type` class is set, add `alert--${type}` to className.
6. Add 2 new alerts to dashboard, one with `type="warning"` and other with `type="success"`

## Guidelines

### How to pass props to components in React

[https://www.robinwieruch.de/react-pass-props-to-component](https://www.robinwieruch.de/react-pass-props-to-component)

[https://reactjs.org/docs/components-and-props.html#function-and-class-components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
