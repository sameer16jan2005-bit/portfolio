class Animal {
    void info() {
        System.out.println("Animal class is the base class!!!");
    }
}

class Dog extends Animal {
    @Override
    void info() {
        System.out.println("Dog class inherits properties of Animal class and it is the base class for BabyDog class!!!");
    }
}

class BabyDog extends Dog {
    @Override
    void info() {
        super.info();
        System.out.println("BabyDog class inherits properties of Dog class!!!");
    }
}

public class MultilevelInheritance {
    public static void main(String[] args) {
        BabyDog obj = new BabyDog();
        obj.info();
    }
}
