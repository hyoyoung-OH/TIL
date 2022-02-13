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

    }
}
