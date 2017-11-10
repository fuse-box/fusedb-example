import { Field, Model } from "fusedb";
import { Book } from './Book';

export class Author extends Model<Author> {
    @Field()
    public name: string;

    @Field()
    public books: Book[];
}


