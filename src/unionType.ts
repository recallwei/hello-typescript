function kgToLbs(weight: string | number): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight, 10) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10KG"));
