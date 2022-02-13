import java.util.Locale;

public class Sample {
    public static void main(String[] args) {
//        //Number
//        int a = 10;
//        int b = 5;
//        System.out.println(a + b);
//        System.out.println(a - b);
//        System.out.println(a * b);
//        System.out.println(a / b);
//
//        System.out.println(7 % 3);
//        System.out.println(3 % 7);
//
//        int i = 0;
//        int j = 10;
//        i++;
//        j--;
//
//        System.out.println(i);
//        System.out.println(j);

        //boolean
        boolean isSuccess = true;
        boolean isTest = false;

        //조건문
        int base = 180;
        int height = 185;
        boolean isTall = height > base;

        if (isTall) {
            System.out.println("키가 큽니다");
        }

        int i = 3;
        boolean idOdd = i % 2 == 1;
        System.out.println(idOdd);

        //String
        //문자열의 값을 비교할 때는 반드시 equals 사용


        String a = "Hello Java";
        //indexOf 문자열에서 특정 문자가 시작되는 위치(인덱스)를 리턴한다.
        System.out.println(a.indexOf("Java"));
        //contains 문자열에서 특정 문자열이 포함되어 있는 지의 여부 리턴
        System.out.println(a.contains("Java"));
        //charAt 문자열에서 특정 위치의 문자열을 리턴
        System.out.println(a.charAt(6));
        //replaceAll 특정 문자열을 다른 문자열로 바꾸고자 할 떄 사용
        System.out.println(a.replaceAll("Java", "World"));
        //substring 문자열 중 특정 부분을 뽑아낼 경우에 사용
        System.out.println(a.substring(0, 4));
        //toUpperCase 문자열을 모두 대문자로 변경할 떄 사용(모두 소문자로 변경할 때는 toLowerCase 사용)
        System.out.println(a.toUpperCase());
        //split 문자열을 특정 구분자로 분리하는 메서드
        String b = "a:b:c:d";
//        String[] result = a.split(":");

        //StringBuffer 문자열을 추가하거나 변경할 때 사용

        //append
        StringBuffer sb = new StringBuffer(); //StringBuffer 객체 sb 생성
        sb.append("Hello");
        sb.append(" ");
        sb.append("jump to java");
        String result = sb.toString();
        System.out.println(result);

        //insert 특정 위치에 원하는 문자열을 삽입할 수 있다.
        sb.insert(0, "hello ");
        System.out.println(sb.toString());


    }
}
