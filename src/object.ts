let user: {
  id: number;
  name: string;
  creationTime: (date: Date) => void;
} = {
  id: 1,
  name: "Bruce",
  creationTime: (date: Date) => {
    console.log(date);
  },
};
