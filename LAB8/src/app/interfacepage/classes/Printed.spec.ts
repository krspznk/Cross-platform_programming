import { Book } from './Book';
import { Magazine } from './Magazine';
import { Textbook } from './Textbook';

describe('PrintedPublication Tests', () => {
  let book: Book;
  let magazine: Magazine;
  let textbook: Textbook;

  beforeEach(() => {
    book = new Book('Awesome Book', 'John Doe', 300);
    magazine = new Magazine('Cool Magazine', 'Jane Smith', 'Weekly');
    textbook = new Textbook('Intro to Programming', 'Alice Johnson', 'Computer Science', 500);
  });

  it('Book should be created', () => {
    expect(book).toBeTruthy();
  });

  it('Magazine should be created', () => {
    expect(magazine).toBeTruthy();
  });

  it('Textbook should be created', () => {
    expect(textbook).toBeTruthy();
  });

  it('Book should have correct page count', () => {
    expect(book.getPageCount()).toBe(300);
  });

  it('Magazine should have correct frequency', () => {
    expect(magazine.getFrequency()).toBe('Monthly');
  });

  it('Textbook should have correct subject', () => {
    expect(textbook.determineType()).toBe('Textbook');
  });
});
