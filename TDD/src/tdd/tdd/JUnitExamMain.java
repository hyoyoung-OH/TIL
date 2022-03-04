package tdd;

public class JUnitExamMain {

    // 필드
    private int num = 0;

    // 생성자
    public JUnitExamMain(int num) {
        this.num = num;
    }

    // 메서드
    public int add(int num) {
        this.num += num;
        return this.num;
    }

}

