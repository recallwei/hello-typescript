type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Bruce",
  retire: (date: Date) => {
    console.log(date);
  },
};

type BuiltInNumber = number;

let builtInNumber: number = 123456;
