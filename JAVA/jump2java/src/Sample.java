//파라미터: 메소드에 입력으로 전달된 값을 받는 변수
//arguments(인수): 메소드를 호출할 때 전달하는 입력값


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