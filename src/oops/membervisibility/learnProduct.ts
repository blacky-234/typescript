class GreeterProduct{

    public helloworld(){
        console.log("hello world : " + this.getName());
    }

    protected getName(){
        return "return 0";
    }
}

class GreeterCheckProductu extends GreeterProduct{
    public howday(){
        console.log("hello world 2 class: " + this.getName());
    }
}

const g = new GreeterCheckProductu();
g.helloworld();
g.howday();
// g.getName(); TODO: Can't access getName for protected