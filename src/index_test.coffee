import {mcron} from './index.js'


do =>
  mcron(
    =>
      console.log new Date().toLocaleString()
    2
  )

