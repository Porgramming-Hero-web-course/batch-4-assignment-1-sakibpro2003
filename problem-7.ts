class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge = (): number => {
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - this.year;

    return carAge;
  };
}

