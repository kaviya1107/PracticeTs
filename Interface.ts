/* An interface is a way to define the structure of an object or a contract that classes or objects must follow.
Interfaces can be used to define properties, methods, and even indexable types.
An interface in TypeScript is a blueprint for objects, classes, or functions.

Key Points:

"Shape Interface Challenge":
Define an interface with area and calculateArea().
Implement it in Rectangle and Circle classes.

"Optional Properties":
Define a Person interface with optional age.
Demonstrate using objects with and without the optional property.

"Function Interface":
Create an interface for a function type.
Implement functions like add, subtract, and multiply.

"Extending Interface":
Define Animal with name and makeSound().
Extend it to Dog with fetch().
Implement the extended interface in a class.

"Indexable Interface":
Create an interface for a product catalog where products are indexed by id.
Implement functions to add and retrieve products.

"Readonly and Optional Properties":
Define a UserProfile interface with readonly and optional properties.
Write a function to log profile details.
*/

//Interface Syntax
interface emp{
    id:number;
}
class Emp implements emp{
    id=22;
}
const nums=new Emp();
console.log(nums.id);

//Using Object without class
interface jane{
    firstname:string;
    secondname:string;
}
let jan:jane={
    firstname:"kavi",
    secondname:"mp",
};
console.log(jan);

//Extending Interface
interface num{
    rollno:number;
}
interface num2 extends num{
    sno:number;
}
class student implements num2{
    rollno=20;
    sno=2222;
}
const stud=new student();
console.log(stud.rollno);

//Using Constructor
interface Person{
    name:string;
    age:number;
}
class perso implements Person{
    constructor(public name:string,public age:number,public roll:number){ //public is used to properties will automatically declared and initialized
        console.log(`this  name is ${this.name},${this.age},${this.roll}`); //add extra properties using constructor while using public
    }
    //also use constructor like this without public
    //constructor(name:string,age:number,roll:number);
    //this.name=name;
    //this.age=age;
    //const per=new perso("kavi",10);
    //console.log(per.name);
}
const per=new perso("kavi",20,108);

//Function Interface using anonymous
interface ConvertCase{
    (str:string,isupper:boolean):string;
}
let format:ConvertCase;
format=function(str:string,isupper:boolean):string{
    return isupper?str.toUpperCase():str.toLowerCase();
}
console.log(format("kavi",true));

//readonly and optional
interface UserProfile{
    readonly name:string;
    email:string;
    phone?:number;
}
function User(stud:UserProfile):void{
    console.log(stud.name);
    console.log(stud.email);
    if(stud.phone){
        console.log(`${stud.phone}`);  
    }
}
const profile:UserProfile={
    name:"kavi",
    email:"kavi@gmail.com",
    phone:27272828
};
profile.email="jemi@gmail.com" //we can modify the email value..and not able to modify in name because that is readonly
User(profile);

//Real time example Interface
//Authentication System

interface Authentication{
    login(username:string,password?:string):void;
    logout():void;
}
// Class implementing Google authentication
class Google implements Authentication{
    login(username: string): void {
       console.log(`${username} loggin using Google successfull`);
    }
    logout(): void {
        console.log("Logged out from google");
    }
}

// Class implementing Email/Password authentication
class EmailPassword implements Authentication{
    login(username: string, password:string): void {
        if(this.VerifyPassword(password)){
            console.log("loggin success"); 
        }
        else{
            console.log("login failed");
        }
    }
    logout(): void {
        console.log("Invalid Passwerd or Username");
    }
     VerifyPassword(password:string):boolean{
        return password==="Kavi";
        }
    }
    const emailPassword=new EmailPassword();
    emailPassword.login("kaviya","Kavi")
    emailPassword.login("kaviya","Ka")
    const google=new Google(); 
    google.login("kavii")
   

