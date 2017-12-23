import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';
import './../css/App.css';


class BookShelf extends React.Component {
    
    static propTypes={
        books: PropTypes.array,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const books = this.props.books;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid"> 
                    {books.map((book,index)=>(
                        <Book
                             book={book}
                             key={ book.id }
                             onShelfChange={(shelf)=>{
                                this.props.onShelfChange(book.id,shelf)
                             }}
                        />
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookShelf