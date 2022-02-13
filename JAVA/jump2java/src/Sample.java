import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;


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

        //Array 자료형의 집합을 의미
        /*자주 접하는 오류
        ArrayIndexOutOfBoundsException : 예를들어 배열의 길이는 총 7개인데, 만약 8번쨰 값을 얻으려고 시도하면 이와같은 오류 발생
         */

        //List
        //ArrayList
        //add
        ArrayList pitches = new ArrayList();
        pitches.add("138");
        pitches.add("129");
        pitches.add("142");
        //get
        System.out.println(pitches.get(1));
        //size ArrayList의 갯수를 리턴한다
        System.out.println(pitches.size());
        //contains 리스트 안에 해당 항목이 있는 지를 판별하여 그 결과물을 boolean 으로 리턴
        System.out.println(pitches.contains("142"));
        /* remove 방식이 2가지 있음
        1. remove(객체): 리스트에서 객체에 해당되는 항목을 삭제하고 삭제한 결과(true, false)를 리턴
        2. remove(인덱스): 해당 인덱스의 항목을 삭제하고 삭제된 항목을 리턴
         */
        System.out.println(pitches.remove("129"));
        System.out.println(pitches.remove(0));

        //Generics
        //ArrayList<String> pitches = new ArrayList<>();
        /* <String>이라는 제네릭 표현식은 'ArrayList 안에 담을 수 있는 자료형은 String 타입 뿐이다'라는 것을 의미
        즉, 제네릭스를 이용하면 좀 더 명확한 타입 체크가 가능
         */

        //Map
        //HashMap
        HashMap<String, String> map = new HashMap<>();
        map.put("people", "사람");
        map.put("baseball", "야구");

        System.out.println(map.get("people"));
        System.out.println(map.get("hy"));
        System.out.println(map.getOrDefault("hy", "효영"));
        System.out.println(map.containsKey("people"));
//        System.out.println(map.remove("people"));
        System.out.println(map.size());
        System.out.println(map.keySet());

        //LinkedHashMap : 입력한 순서대로 데이터를 저장
        //TreeMap : 입력한 key의 오름차순 순서로 데이터를 저장

        //Set: Set자료형에는 HashSet, TreeSet, LinkedHashSet 등의 Set 인터페이스를 구현한 자료형이 있다.
        HashSet<String> set = new HashSet<>(Arrays.asList("H", "e", "l", "l", "o"));
        System.out.println(set);

        HashSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        HashSet<Integer> s2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8, 9));
        HashSet<Integer> intersection = new HashSet<>(s1);

        intersection.retainAll(s2); //교집합 수행
        System.out.println(intersection); // [4,5,6] 출력

        HashSet<Integer> union = new HashSet<>(s1); //s1으로 union 생성
        union.addAll(s2); //합집합 수행
        System.out.println(union);

        HashSet<Integer> substract = new HashSet<>(s1);
        substract.removeAll(s2); //차집합 수행
        System.out.println(substract);

        set.add("Jump");
        set.add("To");
        set.add("Java");
        System.out.println(set);

        set.addAll(Arrays.asList("To", "Java"));
        System.out.println(set);

        set.remove("To");
        System.out.println(set);

    }
}

