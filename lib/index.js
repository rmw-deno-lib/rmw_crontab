// Generated by CoffeeScript 2.5.1
var DCron, HCron, MCron;

import {
  _try
} from './deps.js';

export var Cron = class Cron {
  constructor(interval1, delay1) {
    this.interval = interval1;
    this.delay = delay1;
    this.job = [];
  }

  run() {
    var i, interval, ref;
    ({interval} = this);
    ref = this.job;
    for (i of ref) {
      i[0] -= interval;
      if (i[0] < interval) {
        i[0] = i[1];
        _try(i[2]);
      }
    }
  }

  add() {
    var add;
    this.timer = setInterval(this.run.bind(this), this.interval * 1000);
    add = function(job, interval = 1, delay = void 0) {
      if (delay === void 0) {
        ({delay} = this);
      }
      interval = interval * this.interval;
      setTimeout(() => {
        return _try(job);
      }, delay * 1000);
      return this.job.push([interval + delay, interval, job]);
    };
    this.add = add.bind(this);
    return add.apply(this, arguments);
  }

};

MCron = new Cron(60, 3);

HCron = new Cron(3600, 30);

DCron = new Cron(3600 * 24, 60);

export var mcron = MCron.add.bind(MCron);

export var hcron = HCron.add.bind(HCron);

export var dcron = DCron.add.bind(DCron);

//# sourceMappingURL=index.js.map
