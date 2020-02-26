# seState hook

Guidelines below

## Assignments

### Assignment 1 - KickFlip Component

1. Open KickFlip component (`src/components/KickFlip/KickFlip.tsx`)
2. Create new state variable `showBack`, with initial state `false`
3. Add onClick handler to outer `<div>` to toggle showBack state variable.
   So every click on outer div toggles `showBack` value (true -> false & false -> true);
4. If showBack current state is true, add className `kick-flip--back` to it.
5. Check the result.

## Guidelines

### Assignment 2 - Random Component

1. Create Random component (`src/components/Random/Random.tsx`)
2. Using useState hook make component to generate Random integer(0-10) every time div is pressed.
   Component JSX

```JSX
<div className="random">Random Integer here</div>;
```

### Using the State Hook

[https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)

### Component state

[https://reactjs.org/docs/faq-state.html](https://reactjs.org/docs/faq-state.html)

### props vs state

[https://github.com/uberVU/react-guide/blob/master/props-vs-state.md](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
