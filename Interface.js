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
var Emp = /** @class */ (function () {
    function Emp() {
        this.id = 22;
    }
    return Emp;
}());
var nums = new Emp();
console.log(nums.id);
var jan = {
    firstname: "kavi",
    secondname: "mp",
};
console.log(jan);
var student = /** @class */ (function () {
    function student() {
        this.rollno = 20;
        this.sno = 2222;
    }
    return student;
}());
var stud = new student();
console.log(stud.rollno);
var perso = /** @class */ (function () {
    function perso(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
        console.log("this  name is ".concat(this.name, ",").concat(this.age, ",").concat(this.roll)); //add extra properties using constructor while using public
    }
    return perso;
}());
var per = new perso("kavi", 20, 108);
var format;
format = function (str, isupper) {
    return isupper ? str.toUpperCase() : str.toLowerCase();
};
console.log(format("kavi", true));
function User(stud) {
    console.log(stud.name);
    console.log(stud.email);
    if (stud.phone) {
        console.log("".concat(stud.phone));
    }
}
var profile = {
    name: "kavi",
    email: "kavi@gmail.com",
    phone: 27272828
};
profile.email = "jemi@gmail.com"; //we can modify the email value..and not able to modify in name because that is readonly
User(profile);
// Class implementing Google authentication
var Google = /** @class */ (function () {
    function Google() {
    }
    Google.prototype.login = function (username) {
        console.log("".concat(username, " loggin using Google successfull"));
    };
    Google.prototype.logout = function () {
        console.log("Logged out from google");
    };
    return Google;
}());
// Class implementing Email/Password authentication
var EmailPassword = /** @class */ (function () {
    function EmailPassword() {
    }
    EmailPassword.prototype.login = function (username, password) {
        if (this.VerifyPassword(password)) {
            console.log("loggin success");
        }
        else {
            console.log("login failed");
        }
    };
    EmailPassword.prototype.logout = function () {
        console.log("Invalid Passwerd or Username");
    };
    EmailPassword.prototype.VerifyPassword = function (password) {
        return password === "Kavi";
    };
    return EmailPassword;
}());
var emailPassword = new EmailPassword();
emailPassword.login("kaviya", "Kavi");
emailPassword.login("kaviya", "Ka");
var google = new Google();
google.login("kavii");
