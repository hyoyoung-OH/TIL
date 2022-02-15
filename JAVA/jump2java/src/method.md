# 메소드

: 클래스가 가지고 있는 기능으로 클래스 내부에 선언 메소드는 입출력 유무에 따라 다음과 같이 4가지로 분류 가능

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

```
String say(){
        return"Hi";
        }
```

사용 예

```java
public class Sample {
    String say() {
        return "Hi";
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        String a = sample.say();
        System.out.println(a);
    }
}
```

## 리턴값이 없는 메소드

```
void sum(int a,int b){
        System.out.println(a+"과"+b+"의 합은 "+(a+b)+"입니다.");
        }
```

사용 예

```java
public class Sample {
    void sum(int a, int b) {
        System.out.println(a + "과" + b + "의 합은 " + (a + b) + "입니다.");
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        sample.sum(3, 4);
    }
}
```

## 입력값도 리턴값도 없는 메소드

```
void say(){
    System.out.println("Hi");
}
```

사용 예 -단 한가지

```java
import java.sql.SQLOutput;

public class Sample {
    void say() {
        System.out.println("Hi");
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        sample.say();
    }
}
```

## return의 또 다른 쓰임새

메소드를 빠져나가기 원할 때 return을 단독으로 사용해 메소드를 즉시 빠져나갈 수 있다.

```java
public class Sample {
    void sayNick(String nick) {
        if ("fool".equals(nick)) {
            return;
        }
        System.out.println("나의 별명은" + nick + "입니다.");
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        sample.sayNick("angel");
        sample.sayNick("fool"); //출력되지 않음
    }
}
```

SayNick 메소드는 입력으로 받은 문자열 값을 받아 출력하는 메소드. 이 메소드 역시 리턴값이 없음. 문자열을 출력한다는 것과 리턴값이 있다는 것은 다른말. 메소드의 리턴값은 오로지 return문에 의해서만
생성. 이 메소드는 입력값으로 "fool"이라는 값이 들어오면 문자열을 출력하지 않고 메소드를 즉시 빠져나간다. 이렇게 메소드 수행 시 **특정 조건에 따라 메소드를 즉시 빠져나가고 싶은 경우 return문을
이용하면 된다.**
> return 문만을 써서 메소드를 빠져나가는 이 방법은 리턴자료형이 void인 메소드에만 해당



