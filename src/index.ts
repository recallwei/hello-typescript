const HELLO_TYPESCRIPT: string = "Hello TypeScript!";
let age: number = 22;
if (age < 50) {
  age += 10;
}
console.log(age);

let sales: number = 123456789;
let course: string = "TypeScript";
let isPublished: boolean = true;

// If a variable doesn't initialize with type declaration, it will be assigned to type 'any'.
let level;
level = 1;
level = "1";

function render(document: string) {
  console.log(document);
}

level = render(level);
