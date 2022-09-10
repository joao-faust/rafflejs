# rafflejs

An easy way to raffle values

```bash
npm install rafflejs
```

the draw function expect the two parameters below:

 - values: array of values to draw;
 - drawnValues: number of values that will be drawn.

code exemple:

```javascript
  const raffle = require('rafflejs');

  const values = raffle(['dog', 'cat', 'snake', 'tiger'], 2);

  console.log(values); // ['dog', 'cat']
```
