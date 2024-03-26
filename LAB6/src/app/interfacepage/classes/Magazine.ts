import { PrintedPublication } from "./PrintedPublication";
import { PeriodicalInterface } from "./PeriodicalInterface";

export class Magazine extends PrintedPublication implements PeriodicalInterface {
    private magazine_name: string;

    constructor(title: string, author: string, magazine_name: string) {
        super(title, author);
        this.magazine_name = magazine_name;
    }

    getFrequency(): string {
        return "Monthly";
    }

    printDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Magazine name: ${this.magazine_name}`);
    }

    determineType(): string {
        return "Magazine";
    }
}