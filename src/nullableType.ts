function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet(undefined);

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer: null | Customer = getCustomer(1);
// if (customer !== null && customer != undefined)
console.log(customer?.birthday.getFullYear());

let customers: Array<Customer | null> = [customer];

console.log(customers?.[0]);

let log: any = null;
// If log is not a function, it will not cause error.
log?.("a");
