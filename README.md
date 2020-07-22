# maximum-stack-call

## install

```bash
npm install maximum-stack-call -S
```

## params

|   name    |  type  | default |       description       |
| :-------: | :----: | :-----: | :---------------------: |
| delayTime | Number |  3000   | delay time for callback |
| oversize  | Number |   20    | max size for the stack  |

## usage

```js
import MaximumStackCall from 'maximum-stack-call';

const maximumStackCall = new MaximumStackCall(console.log, {
  delayTime: 3000,
  oversize: 20,
});
maximumStackCall.push({ x: 1 });
```
