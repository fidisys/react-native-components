# header

Header component for react-native page view

## Demo
<table>
<tr>
<img src="https://user-images.githubusercontent.com/28846043/67081424-c00d1180-f1b4-11e9-97ae-e32d22c452ab.gif" width="250">
</td>
</tr>
</table>


## Components
- Header
- HeaderLeft
- HeaderBody
- HeaderRight

## Installation
`` npm i @fidisys/header --save ``

___

## Usage

`` import { Header,HeaderBody, HeaderRight, HeaderLeft } from '@fidisys/header'
 ``


## Examples
```jsx
<Container
style={{
  alignItems: 'center'
  }}>
  <Header>
    <HeaderLeft>
      <IconButton buttonEvent={() => this.goBack()}>
        <Icon size={22} color="white" name="md-arrow-back" />
      </IconButton>
    </HeaderLeft>
    <HeaderBody>
        <Text style={{color: 'white' }}>Header Title</Text>
      </HeaderBody>
    <HeaderRight />
  </Header>
</Container>
```

## Props

| Prop           | Type   | Default   | Description                                           |
| -------------- | ------ | --------- | ----------------------------------------------------- |
| style   | React-Native StyleSheet Object | null | Custom styling for container view |
| statusbarColor   | string | 'blue' | color for status bar |
| barStyle   | string('dark-content' | 'light-content') | 'dark-content' | status bar style mode |

___

## License

MIT