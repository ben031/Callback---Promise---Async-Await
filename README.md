# Callback / Promise / (Async/Await)

## 비동기 처리를 하는 이유 ?

자바스크립트는 싱글 스레드 기반으로 작업을 처리한다. <strong>즉, 한 번에 하나의 일만 처리 한다.</strong> 우리가 흔히 찾아볼 수 있는 예로 점원 한 명과 고객 3명의 주문을 처리하는 방법이 있다. 한 명의 주문을 받고 주방에 넘겨 주방에서 일이 끝날 때까지 그 다음 사람의 주문을 받지 않는다. 이렇게 3명의 주문 처리를 한다면 아주 비효율적이며 시간이 오래 걸릴 것이다. 만약 첫 주문이 시간이 정말 오래 걸리는 요리라면 더더욱일 것이다. 따라서 주문을 한 번에 다 받고 주방에 넘겨 주방에서 나오는 요리를 가져다 주면 될 것이다.
<br />
위의 예제가 왜 싱글 스레드 기반인 자바스크립트가 비동기 처리를 하는 이유다.
<br />
위의 예제에서 주방은 쓰레드, 주문은 이벤트.
<br /><br />
let's dive into it a bit more.
<br />
이벤트가 발생 되어 콜백 함수가 실행 되거나 그냥 함수가 실행 될 때 함수들은 스택에 쌓여 함수를 실행한다. 여기서 작지만 작지 않은 차이점이 존재 한다. 일반적인 함수가 실행 될 때는 스택에 바로 바로 쌓여 가장 늦게 들어온 순서대로 함수가 처리된다. <strong>이것이 First In Last Out</strong> 이다. 여기서 콜백 함수는 콜백 큐에 가서 대기한다. 대기하고 있는 콜백 함수들은 스택이 비워지게 될 때만 스택에 옮겨져 실행 된다.
<br />
이렇게 스택이 하나인 싱글 스레드임에도 여러 가지 일을 동시적으로 처리하는 것을 우리는 <strong>동시성</strong> 이라고 표현한다

![](https://miro.medium.com/max/1400/1*4XElRWCtF7C2XThHLYSBLQ.gif)

## Callback (콜백)

콜백함수는 함수의 매개변수로 전달되어, 그 함수의 이벤트가 발생한 후 매개변수로 전달된 함수가 다시 호출되어 실행되는 것을 의미한다.
<br>
여기서 매개변수로 전달된 함수를 우리는 callback(콜백)함수라고 한다.
<br>
그러나 중첩된 콜백 합수는 콜벡 지옥(Callback Hell)을 야기한다. 이에 콜백 지옥을 해결 하는 방법에는 밑에 있는 두 가지 방법이 존재한다.

![](https://miro.medium.com/max/1400/1*YCh1fXt_Ycf-00a9E88-Hg.png)

최근에 공부한 node.js 를 통해 콜백 작동 원리를 더 깊게 이해 할 수 있었다.
<br>
단순하지만 단순하지 않은..
<br>
그냥 완료되면 다음 함수를 알아서 작동시켜줘 !! 인데..😅

## Promise

>"I Promise a Result!" 내가 결과를 약속한다!!

![](https://www.deadcoderising.com/content/images/2017/09/sync-async.gif)

<strong>"Producing code"는 시간이 조금 걸리는 코드
<br />
"Consuming code"는 결과를 기다려야만 하는 코드
<br />
Promise 객체는 이 두 코드를 연결시키는 자바스크립트 객체</strong>
<br />
<br />
시간이 걸리는 코드가 성공적이라면 resolve(value) 메소드를 call하고 실패라면 reject(error) 메소드를 call한다.
<br />
프로미스는 상태와 결과를 반환하는데 시간이 조금 걸리는 코드 상태라면 상태는 "pending", 성공적으로 마쳤다면 "fulfilled", 실패했다면 "rejected"를 반환한다.
<br />
이제 결과를 기다려야만 하는 코드 쪽으로 넘어와 시간이 조금 걸리는 코드에서 반환한 value 혹은 error를 받을 것이다.

### Promise.then, Promise.catch 메소드

위의 Producing code에서 resolve()가 호출되었다면 then 메소드로 응답 결과를 출력하고
reject()가 호출되었다면 catch 메소드로 오류를 출력한다.

![](https://www.deadcoderising.com/content/images/2017/09/successful_callback.gif)

then 메소드로 응답 결과를 출력.

![](https://www.deadcoderising.com/content/images/2017/09/callbacks_error.gif)

catch 메소드로 오류를 출력.

## Async / Await

async / await를 이용하면 Promise를 쉽게 사용할 수 있다. async 함수는 항상 Promise를 반환한다. 만약 Promise가 아닌 것은 Promise로 감싸 반환한다. 즉, resolve나 reject로 감싸 값을 반환한다.
<br />
이제 await의 멋진 기능을 살펴 보자. await의 의미는 기다린다는 뜻이다. 단어의 의미 그대로 Promise가 처리 될 때까지 기다린다. 결과는 처리 된 후에 반환된다. await는 async가 붙은 함수 안에서만 사용할 수 있다.
<br />
<hr />

*예시 코드*

```javascript
async function foo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

foo();
```
<hr />
