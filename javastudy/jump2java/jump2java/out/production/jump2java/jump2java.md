# 메소드

메소드는 입출력 유무에 따라 다음과 같이 4가지로 분류 가능

- 입력과 출력 모두 있는 메소드
- 입출력 모두 없는 메소드
- 입력은 있고 출력은 업는 메소드
- 입력은 없고 출력은 있는 메소드

## 일반적인 메소드

### 입력값과 리턴값 모두 있음

``` java
int sum(int a, int b) {
    return a+b;
```

sum 메소드는 두 개의 입력값을 받아서 서로 더한 값을 돌려주는 메소드이다. 즉, 입력값과 리턴값이 있는 메소드는 다음처럼 사용됨

```
리턴값 받을 변수 = 객체.메소드명(입력인수1, 입력인수2, ...)
```

## 입력값이 없는 메소드

```java
String say(){
        return"Hi";
        }
```

사용 예