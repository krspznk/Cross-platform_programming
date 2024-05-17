import { BookInterface } from "./BookInterface";
import { PeriodicalInterface } from "./PeriodicalInterface";
import { PrintedPublication } from "./PrintedPublication";

export class Book extends PrintedPublication implements BookInterface, PeriodicalInterface {
    private pageCount: number;

    constructor(title: string, author: string, pageCount: number) {
        super(title, author);
        this.pageCount = pageCount;
    }

    getPageCount(): number {
        return this.pageCount;
    }

    getFrequency(): string {
        return "One-time";
    }

    printDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Page Count: ${this.pageCount}`);
    }

    determineType(): string {
        return "Book";
    }
}
