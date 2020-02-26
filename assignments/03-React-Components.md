# React Components

Guidelines below

## Assignments

### Assignment 1 - Logo Component

1. Create a new Logo component to `src/components/Logo/Logo.tsx`
2. In that file write a new Logo Component that simply returns JSX:

```jsx
<p className="logo">
  <img className="logo__image" src="/logo192.png" alt="" />
</p>
```

3. export component (Modules) (`src/components/index.ts`)
4. import component in App.tsx (Modules) (`src/App.tsx`)
5. Use Logo component in App.tsx as first children of `<nav>` element.
6. Save and check if you can see the logo in navbar.

### Assignment 2 - Greeting Component

1. Create a new component file (`src/components/Greeting/Greeting.tsx`)
2. In that file write a Greeting React Component that return JSX:

```jsx
<h1>
  Hello, <strong>Member</strong>
</h1>
```

3. export component (Modules) (`src/components/index.ts`)
4. import component in Dashboard.tsx (`src/containers/Dashboard/Dashboard.tsx`)
5. Use Greeting component somewhere inside Dashboard.tsx and confirm your Greeting Component is working.

Extra:

1. Modify the Greeting component so that it returns different greeting depending on time.
   Rules: <br />
   0:00 - 11:59 = `Good morning, Member!` <br />
   12:00 - 16:59 = `Good afternoon, Member!` <br />
   17:00 - 23:59 = `Good evening, Member!`<br />
   <details>
    <summary>Hint</summary>
    How to get current hours:
    https://www.w3schools.com/js/js_date_methods.asp]
    </details>

React components assignments continue in `05-React-components-2`

## Guidelines

[https://reactjs.org/docs/components-and-props.html#function-and-class-components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
