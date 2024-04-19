export abstract class Printed {
    name: string = "";
    constructor() {}

    abstract getCost(): number;
}

export class Magazine extends Printed {
    edition: number;
    price: number;

    constructor(name: string, edition: number, price: number) {
        super();
        if (edition <= 0 || price <= 0) {
            throw new Error("Edition and price must be greater than 0");
        }
        this.name = name;
        this.edition = edition;
        this.price = price;
    }

    getCost(): number {
        return this.edition * this.price;
    }
}

export class Newspaper extends Printed {
    pages: number;
    page_price: number;
    edition: number;

    constructor(name: string, pages: number, page_price: number, edition: number) {
        super();
        if (pages <= 0 || page_price <= 0 || edition <= 0) {
            throw new Error("Pages, page price, and edition must be greater than 0");
        }
        this.name = name;
        this.pages = pages;
        this.page_price = page_price;
        this.edition = edition;
    }

    getCost(): number {
        return this.page_price * this.pages * this.edition;
    }
}
