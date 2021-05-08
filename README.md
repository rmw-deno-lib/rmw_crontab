<!-- 本文件由 ./readme.make.md 自动生成，请不要直接修改此文件 -->

# mcron 

Given a time interval, the task is run periodically, and the default minimum time interval is 1 minute.


export in your `deps.js`

```
export {default as mcron} from 'https://deno.land/x/mcron@0.0.0/lib/index.js'
```

source code

```coffee
export default (sec)=>
  new Promise((resolve) => setTimeout(resolve, sec * 1000))


```

use example

coffeescript version

```coffee
import mcron from './index.js'


do =>
  mcron 1,=>
    console.log new Date()


```


javascript version

```javascript
// Generated by CoffeeScript 2.5.1
import mcron from './index.js';

(() => {
  return mcron(1, () => {
    return console.log(new Date());
  });
})();

//# sourceMappingURL=index_test.js.map

```
