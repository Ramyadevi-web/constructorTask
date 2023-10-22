class Uber{
    constructor(custName,dist,waitTime,rate){
      this.custName = custName;
      this.dist = dist;
      this.waitTime = waitTime;
      this.rate = rate;
    }
    getRideDetais(){
        if(this.waitTime != 0)
        console.log(`${this.custName} travelled distance of ${this.dist}km with rate of ${this.rate} and waiting period of ${this.waitTime}`);
        else
        console.log(`${this.custName} travelled distance of ${this.dist}km with rate of ${this.rate}`);
    }
    getPrice(){
        let price;
        if(this.waitTime != 0){
            price = this.dist * this.rate + (this.waitTime * 5);
        }else{
            price = this.dist * this.rate;
        }
        console.log(`The price of your ride is ${price}`);
    }

    setDistance(dist){
        this.dist = dist;
    }
}

const ride1 = new Uber("Ramya",50,20,11);
const ride2 = new Uber("Devi",10,0,15);
const ride3 = new Uber("Ashok",30,5,12);
const ride4 = new Uber("Akshaya",80,40,14);
const ride5 = new Uber("Vishwa",20,0,10);
ride1.getRideDetais();
ride1.getPrice();


ride2.setDistance(30);
ride2.getRideDetais();
ride2.getPrice();

ride3.getRideDetais();
ride3.getPrice();

ride4.getRideDetais();
ride4.getPrice();

ride5.getRideDetais();
ride5.getPrice();