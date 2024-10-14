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
var abstract_employee = /** @class */ (function () {
    function abstract_employee() {
    }
    abstract_employee.prototype.getsound = function () {
        return "".concat(this.name);
    };
    return abstract_employee;
}());
var derived_class = /** @class */ (function (_super) {
    __extends(derived_class, _super);
    function derived_class() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "kavi";
        _this.rollno = 123;
        return _this;
    }
    derived_class.prototype.sound = function () {
        return "".concat(this.name); //if abstract keyword is used we must use this method in derived class
    };
    derived_class.prototype.get = function () {
        console.log("kkkk");
    };
    return derived_class;
}(abstract_employee));
var val = new derived_class();
console.log(val.name);
console.log(val.rollno);
val.get();
console.log(val.getsound());
console.log(val.sound());
//Real time example "Payment Method"
// Abstract class Payment
// abstract class Payment {
//     Amount: number;
//     constructor(amount: number) {
//         this.Amount = amount;
//     }
//     abstract processPayment(): void;
//     paymentInfo(){
//         console.log(`Processing payment of $${this.Amount}`);
//     }
// }
// class CreditCardPayment extends Payment {
//     cardNumber: string;
//     constructor(amount: number, cardNumber: string) {
//         super(amount);  // Call parent constructor
//         this.cardNumber = cardNumber;
//     }
//     processPayment(): void {
//         this.paymentInfo();
//         console.log(`Payment of $${this.amount} made using Credit Card: ${this.cardNumber}`);
//     }
// }
// class PayPalPayment extends Payment {
//      email: string;
//     constructor(amount: number, email: string) {
//         super(amount);
//         this.email = email;
//     }
//     processPayment(): void {
//         this.paymentInfo();
//         console.log(`Payment of $${this.amount} made using PayPal: ${this.email}`);
//     }
// }
// const creditPayment = new CreditCardPayment(100, "1234-5678-9876-5432");
// creditPayment.processPayment();
// const paypalPayment = new PayPalPayment(150, "user@example.com");
// paypalPayment.processPayment();
var Payment = /** @class */ (function () {
    function Payment(Amount) {
        this.Amount = Amount;
    }
    Payment.prototype.processmethod = function () {
        console.log("Amount is ".concat(this.Amount));
    };
    return Payment;
}());
var creditPayment = /** @class */ (function (_super) {
    __extends(creditPayment, _super);
    function creditPayment(Amount, Cardnumber) {
        var _this = _super.call(this, Amount) || this;
        _this.Cardnumber = Cardnumber;
        _this.processmethod();
        return _this;
    }
    creditPayment.prototype.paymethod = function () {
        console.log("Processed credit card payment of ".concat(this.Cardnumber, " and Amount is ").concat(this.Amount));
    };
    return creditPayment;
}(Payment));
var credit = new creditPayment(20000, "pa2029t");
credit.paymethod();
credit.processmethod();
