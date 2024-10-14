/*Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one
class (the child or subclass) to inherit properties and methods from another class (the parent or

superclass). This promotes code reusability and establishes a hierarchical relationship between
classes.

When to Use Inheritance
● When you have multiple classes that share common behaviors and properties.
● When you want to create a new class that extends the functionality of an existing class.
● When you want to implement polymorphic behavior.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.Sound = function () {
        console.log("".concat(this.name, "makes the sound"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.Barks = function () {
        console.log("".concat(this.name, " makes the sound"));
    };
    Dog.prototype.meow = function (name) {
        console.log("".concat(this.name));
    };
    return Dog;
}(Animal));
var animal = new Animal("nithu");
animal.Sound();
var dog = new Dog("kavi");
dog.Barks();
dog.meow("nith");
//Real time example
var Booking = /** @class */ (function () {
    function Booking(customername, bookingid) {
        this.customername = customername;
        this.bookingid = bookingid;
    }
    Booking.prototype.confirmbooking = function () {
        console.log("Booking confirmed for ".concat(this.customername));
    };
    return Booking;
}());
var MovieBooking = /** @class */ (function (_super) {
    __extends(MovieBooking, _super);
    function MovieBooking(moviename, seatno, customername, bookingid) {
        var _this = _super.call(this, customername, bookingid) || this;
        _this.moviename = moviename;
        _this.seatno = seatno;
        _this.customername = customername;
        _this.bookingid = bookingid;
        return _this;
    }
    MovieBooking.prototype.getbookingdetails = function () {
        return "".concat(this.moviename, " and ").concat(this.seatno);
    };
    return MovieBooking;
}(Booking));
var movie = new MovieBooking("gilli", 444, "kavi", 12427);
movie.getbookingdetails();
movie.confirmbooking();
