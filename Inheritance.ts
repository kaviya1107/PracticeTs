/*Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one
class (the child or subclass) to inherit properties and methods from another class (the parent or

superclass). This promotes code reusability and establishes a hierarchical relationship between
classes.

When to Use Inheritance
● When you have multiple classes that share common behaviors and properties.
● When you want to create a new class that extends the functionality of an existing class.
● When you want to implement polymorphic behavior.*/

class Animal{
    constructor(public name:string){
    }
    Sound(){
        console.log(`${this.name}makes the sound`);
        
    }
}
class Dog extends Animal{
    Barks(){
        console.log(`${this.name} makes the sound`);
    }
    meow(name:string){
        console.log(`${this.name}`);
        
    }
}

const animal= new Animal("nithu");
animal.Sound();

const  dog = new Dog("kavi");
dog.Barks();
dog.meow("nith");

//Real time example
class Booking{
    constructor(public customername:string,public bookingid:number){
    }
    confirmbooking(){
        console.log(`Booking confirmed for ${this.customername}`);
    }
}
class MovieBooking extends Booking{
    constructor(public moviename:string,public seatno:number,public customername:string,public bookingid:number){
        super(customername,bookingid);
    }
    getbookingdetails(){
        return `${this.moviename} and ${this.seatno}`
    }
}
const movie=new MovieBooking("gilli",444,"kavi",12427);
movie.getbookingdetails();
movie.confirmbooking();