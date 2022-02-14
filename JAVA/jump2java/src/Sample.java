
class Animal {
    String name; //Animal 클래스에 변수를 추가함 => 객체변수
    //객체변수의값은 공유가 안됨. 독립적으로 유지

    public void setName(String name) {
        this.name = name;
    }
}

public class Sample {
    public static void main(String[] args) {
        Animal cat = new Animal(); //new는 객체를 생성할 때 사용되는 키워드로 Animal 클래스의 인스턴스인 cat, 즉 Animal의 객체가 만들어짐
        //객체와 인스턴스
        // 인스턴스라는 말은 특정 객체가 어떤 클래스의 객체인지를 관계 위주로 설명할 때 사용
        cat.setName("bobo");

        Animal dog = new Animal();
        dog.setName("popo");

        System.out.println(cat.name);
        System.out.println(dog.name);
    }
}