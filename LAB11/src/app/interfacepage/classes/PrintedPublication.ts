export abstract class PrintedPublication {
    protected title: string;
    protected author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    abstract printDetails(): void;
    abstract determineType(): string;
}
