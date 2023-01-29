# growl-hook

A Custom Growl Notification
Also viewed on github here
https://github.com/jeremytuesley/growl-hook

## Install

```bash
npm i growl-hook-solution
```

**not uploaded to npm, above won't work, but is set up as so**

## Usage

### Test

To test without installing npm package, clone this repo, then open terminal

```bash
cd growl-test
npm start
```

### Import

```jsx
import React from "react";

import { useGrowl, Growl } from "growl-hook-solution";
```

### Basic Usage

```jsx
const App = () => {
  const [active, setActive] = useGrowl()

  return (
    <div className='App'>
      <header className='App-header'>
        <a className='App-link' href='#' onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message='Hello World!'
        timeout=[1]
      />
    </div>
  )
}
```

### Timeout

By default, the timeout is 3 seconds, you can include the prop "timeout" and the number is in seconds.

### Props

| Name        | Type     | Description                                                       |
| ----------- | -------- | ----------------------------------------------------------------- |
| onDismissed | function | Determines whether the component is dismissed                     |
| message     | string   | The text of the component                                         |
| active      | Boolean  | Determines whether the component is active, showing the component |
| timeout     | integer  | Time before fadeout in **seconds**, default is 3                  |

## License

MIT © [jeremytuesley](https://github.com/jeremytuesley)
