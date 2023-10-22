class Circle{
    constructor(radius,color){
     this.radius = radius;
     this.color = color;
    }
    getRadius(){
        console.log(`The Radius of the circle is ${this.radius}`);
    }
    setRadius(r){
        this.radius = r;
    }
    getColor(){
        console.log(`The color of the circle is ${this.color}`);
    }
    setColor(color){
        this.color = color;
    }
    getArea(){
        let area = Math.floor(Math.PI * this.radius * this.radius);
        console.log(`The Area of the circle is ${area}`);
    }
    getCircum(){
        let circum = Math.floor(2*Math.PI *this.radius);
        console.log(`The Circumference of the circle is ${circum}`);
    }
}
const c1 = new Circle(5,"red");
const c2 = new Circle(15,"blue");
const c3 = new Circle(25,"yellow");

c1.getRadius();
c1.getColor();
c1.setRadius(10);
c1.getRadius();
c1.getArea();
c1.getCircum();

c2.getRadius();
c2.getColor();
c2.getArea();
c2.getCircum();

c3.getRadius();
c3.setColor("Orange");
c3.getColor();
c3.getArea();
c3.getCircum();