class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge = (): string => {
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - this.year;

    return `${carAge} (assuming current year is ${currentYear}))` ;
  };
}


