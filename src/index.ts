import { Author } from "./models/Author";
import { Book } from './models/Book';

async function example(){
    console.log("Run Example...");
    const john = new Author({ name: "John" });
    await john.save();
    
    const book1 = new Book({ name: "book1", author: john });
    const book2 = new Book({ name: "book2", author: john });
    
    await book1.save();
    await book2.save();
    
    
    john.books = [book1, book2];
    await john.save();

    const books =
        await Book.find<Book>()
            .with("author", Author)
            .all();
            
    console.log(books);

}

example();