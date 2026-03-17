"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDCode = void 0;
var IDCode = /** @class */ (function () {
    function IDCode(code) {
        this.code = code;
    }
    IDCode.prototype.gender = function () {
        //(this.code[0]) take the first character of the personal code
        //parseInt conver it to a number
        //if the number is even (divisible by 2), return female
        //if it is odd retun male
        return parseInt(this.code[0]) % 2 === 0 ? "F" : "M";
    };
    return IDCode;
}());
exports.IDCode = IDCode;
