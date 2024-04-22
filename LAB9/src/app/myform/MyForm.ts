export class MyForm {
    name: string = '';
    unit: string = '';
    amount: number = 0;
    price: number = 0;
    producers: string[] = [];
  
    constructor(
      name: string,
      unit: string,
      amount: number,
      price: number,
      producers: any[]
    ) {
      this.name = name;
      this.unit = unit;
      this.amount = amount;
      this.price = price;
      this.producers = producers;
    }
  }