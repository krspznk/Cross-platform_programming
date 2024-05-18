import { PrintedPublication } from "./PrintedPublication";
import { BookInterface } from "./BookInterface";

export class Textbook extends PrintedPublication implements BookInterface {
    private subject: string;
    private pages: number;

    constructor(title: string, author: string, subject: string, pages: number) {
        super(title, author);
        this.subject = subject;
        this.pages = pages;
    }

    getPageCount(): number {
        return this.pages;
    }

    printDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Subject: ${this.subject}`);
    }
    determineType(): string{
        return "Textbook"
    }

}