/*Define an abstract class in Typescript using the abstract keyword.
Abstract classes are mainly for inheritance where other classes may derive from them.
We cannot create an instance of an abstract class.
An abstract class typically includes one or more abstract methods or property declarations.
The class which extends the abstract class must define all the abstract methods.*/

abstract class abstract_employee{
    name:string;
    rollno:number;
    getsound(){
        return `${this.name}`
    }
    abstract sound():void; //abstract keyword
}
class derived_class extends abstract_employee{
    name="kavi";
    rollno= 123;
    sound(){
        return `${this.name}` //if abstract keyword is used we must use this method in derived class
    }
    get(){
        console.log("kkkk");   
    }
}
const val=new derived_class();
console.log(val.name);
console.log(val.rollno);
val.get();
console.log(val.getsound());
console.log(val.sound());

//Real time example "Payment Method"

// Abstract class Payment

abstract class Payment{
    Amount:number;
    constructor( Amount:number){
        this.Amount=Amount;
    }
    abstract paymethod():void;
    processmethod(){
        console.log(`Amount is ${this.Amount}`);
    }
}
class creditPayment extends Payment{
    Cardnumber:string;
    constructor(Amount:number,Cardnumber:string){
        super(Amount);
        this.Cardnumber=Cardnumber;
        this.processmethod();
    }
    paymethod(): void {
        console.log(`Processed credit card payment of ${this.Cardnumber} and Amount is ${this.Amount}`);
    }
}
const credit=new creditPayment(20000,"pa2029t");
credit.paymethod();
credit.processmethod();