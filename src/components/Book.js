import React from 'react';
import { PropTypes } from 'prop-types'
import './../css/Book.css';

class Book extends React.Component {

    static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
    }

    changeShelf = (event) => {
         if(event.target.value.length===0)
             return;
         this.props.onShelfChange(event.target.value)
    }

    render()
    {
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, 
                        height: 193,
                        backgroundImage: "url("+this.props.book.imageLinks.thumbnail+")"}}>
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={this.changeShelf} value={this.props.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option> 
                            <option value="none">None</option>                       
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {
                    this.props.book.authors && this.props.book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                ))}
                </div>
            </li>
        );
    }
}

export default Book