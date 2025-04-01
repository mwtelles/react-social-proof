
A lightweight and customizable React component to display social proof notifications — like “Someone just bought...” messages — that help boost trust and conversions.

[![NPM version](https://img.shields.io/npm/v/react-social-proof?color=blue)](https://www.npmjs.com/package/react-social-proof)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/react-social-proof)](https://bundlephobia.com/package/react-social-proof)

---
### ✨ Features

- 🚀 Easy to integrate
- 🎨 Fully customizable styles and templates
- 🎯 Built-in animations and theming
- 🔁 Looping and random order support
- 🧩 Supports custom `render` and `children` functions

#### 📦 Installation

```bash
pnpm add react-social-proof
# or
npm install react-social-proof
# or
yarn add react-social-proof
```


### 🔧 Usage Example

```tsx
import { SocialProofWidget } from 'react-social-proof'

const notifications = [
  { name: 'Alice', action: 'purchased', product: 'Sneakers' },
  { name: 'Bob', action: 'signed up' },
  // more items...
]

function App() {
  return (
    <SocialProofWidget
      data={notifications}
      position="bottom-left"
      animation="slide"
      delay={3000}
      duration={5000}
      theme="light"
      render={(item) => (
        <div>
          {item.name} just {item.action}!
        </div>
      )}
    />
  )
}
```

---

## ⚙️ Props

| Prop               | Type                                                       | Description                                      |
|--------------------|------------------------------------------------------------|--------------------------------------------------|
| `data`             | `NotificationData[]`                                       | Array of notification items                     |
| `delay`            | `number`                                                   | Delay between notifications                     |
| `duration`         | `number`                                                   | Time each notification stays visible            |
| `loop`             | `boolean`                                                  | Whether to loop after the end                   |
| `random`           | `boolean`                                                  | Randomize the order of notifications            |
| `delayBeforeStart` | `number`                                                   | Initial delay before showing first notification |
| `position`         | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | Widget placement                                |
| `animation`        | `'fade' \| 'slide' \| 'none'`                              | Entry/exit animation                            |
| `theme`            | `'light' \| 'dark' \| 'custom'`                            | Built-in theme or fully custom                  |
| `className`        | `string`                                                   | Custom CSS class                                |
| `style`            | `CSSProperties`                                            | Inline styles                                   |
| `children`         | `(data, index) => ReactNode`                               | Custom render function (overrides `render`)     |
| `render`           | `(data, index) => ReactNode`                               | Alternative render function                     |
| `template`         | `string`                                                   | String-based template                           |
| `onShow`           | `(data, index) => void`                                    | Triggered when a notification is shown          |
| `onHide`           | `(data, index) => void`                                    | Triggered when a notification is hidden         |
| `onEnd`            | `() => void`                                               | Called after all notifications end              |
| `onLoop`           | `() => void`                                               | Called every time a loop restarts               |
