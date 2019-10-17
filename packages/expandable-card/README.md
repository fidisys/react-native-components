# expandable-card

This component make Animated Expandable card container for react native.

## Demo

<table>
<tr>
<img src="https://user-images.githubusercontent.com/28846043/66821374-f3a32e00-ef5f-11e9-8876-5bbb661dc647.gif" width="250">
</td>
</tr>
</table>

## Installation

`npm i expandable-card --save`

---

## Usage

`import { ExpandableCard } from 'expandable-card'`

## Examples

```jsx
<ExpandableCard cardTitle="fidisys card title">
  <Text>Card Content</Text>
</ExpandableCard>
```

## Props

| Prop         | Type                           | Default              | Description                           |
| ------------ | ------------------------------ | -------------------- | ------------------------------------- |
| cardTitle    | String                         | 'This is card title' | Title of Expandable card              |
| iconStyle    | React-Native StyleSheet Object | null                 | custom style for toggle icon          |
| titleStyle   | React-Native StyleSheet Object | null                 | custom style for Title Text           |
| contentStyle | React-Native StyleSheet Object | null                 | custom style for content Wrapper View |

---

## License

MIT
