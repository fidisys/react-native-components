# @fidisys/content

React Native Wrapper component for components between header and footer using keyboard-aware-scrollView

## Getting Started

1. react-native-keyboard-aware-scroll-view

```
 npm i --save react-native-keyboard-aware-scroll-view
```

## Installation

`` npm i @fidisys/content --save ``

___

## Usage

`` import { Content } from '@fidisys/content'
 ``


## Examples
```jsx
<Container>
  <Header></Header>
  <Content>
    <Text>This Is Content</Text>
  </Content>
  <Footer></Footer>
</Container>
```

## Props

| Prop           | Type   | Default   | Description                                           |
| -------------- | ------ | --------- | ----------------------------------------------------- |
| style   | React-Native StyleSheet Object | null | Custom styling for scroll view |
| showsVerticalScrollIndicator   | boolean | true | showing scroll indicator in vertical direction when content overflow the viewport |

___

## License

MIT