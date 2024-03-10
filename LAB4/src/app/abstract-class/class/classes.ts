export abstract class Printed{
    name: string = "";
    constructor() {}

    abstract getCost(): number;
}

export class Magazine extends Printed{
    edition: number;
    price: number;

    constructor(override name: string, edition: number, price: number){
        super();
        this.edition = edition;
        this.price = price;
    }

    getCost(): number {
        return this.edition*this.price;
    }

}


export class Newspaper extends Printed{
    pages: number;
    page_price: number;
    edition: number;

    constructor(override name: string, pages: number, page_price: number,  edition: number){
        super();
        this.pages = pages;
        this.page_price = page_price;
        this.edition = edition;
    }

    getCost(): number {
        return this.page_price * this.pages * this.edition;
    }
}