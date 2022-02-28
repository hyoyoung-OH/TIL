```javascript
class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    this.conuter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      console.log("yo!");
    }
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
//호출할 때 마다 숫자 증가
```
