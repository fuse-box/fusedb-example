import { Field, Model } from "fusedb";
import { Author } from './Author';

export class Book extends Model<Book> {
    @Field()
    public name: string;

    @Field()
    public author: Author;
}