# skeleton-loader

This component can show animated svg skeleton loader as a content placeholder.


## Demo
<table>
<tr>
<img src="https://user-images.githubusercontent.com/28846043/67078410-de700e80-f1ae-11e9-9a6b-0bcabec64dd3.gif" width="250">
</td>
</tr>
</table>

## Getting Started

1. react-native-svg

```
 npm i --save react-native-svg
```

## Installation
`` npm i @fidisys/skeleton-loader --save ``

___

## Usage

`` import SkeletonLoader from '@fidisys/skeleton-loader'
 ``


## Examples
```jsx
<SkeletonLoader
loading={this.state.isLoading}
aspectRatio={0.75}>
  <Text>Card Content</Text>
</SkeletonLoader>
```

## Props

| Prop           | Type   | Default   | Description                                           |
| -------------- | ------ | --------- | ----------------------------------------------------- |
| loading   | boolean | false | boolean value to show/hide skeleton loader                  |
| aspectRatio | number | 0.75 | React native View aspect ratio for scaling Svg                                       |


___

## License

MIT