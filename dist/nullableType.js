"use strict";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
let customers = [customer];
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=nullableType.js.map