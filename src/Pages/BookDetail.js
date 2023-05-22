import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import HighBookDetail from '../Components/highBookDetail';
import Comments from '../Components/Comments';

const dummy_data = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A gripping novel set in the 1930s that explores racial injustice and loss of innocence."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel depicting a totalitarian society ruled by Big Brother."
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel featuring the headstrong Elizabeth Bennet and the proud Mr. Darcy."
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "An exploration of wealth, love, and the American Dream in 1920s America."
    },
    {
        id: 5,
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        description: "A stream-of-consciousness novel that delves into the thoughts and emotions of the characters."
    },
    {
        id: 6,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "A futuristic novel that examines a society where individuals are engineered and controlled."
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A coming-of-age story following the rebellious teenager Holden Caulfield."
    },
    {
        id: 8,
        title: "Moby-Dick",
        author: "Herman Melville",
        description: "An epic tale of a vengeful captain's pursuit of a white whale."
    },
    {
        id: 9,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy adventure novel that introduces readers to the world of Middle-earth."
    },
    {
        id: 10,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "A trilogy that follows the quest to destroy the One Ring and save Middle-earth."
    }
]

export default function BookDetail(props) {
    const params = useParams();
    const match = useRouteMatch();
    
    // const bookID = params.bookdetails;

    const details = dummy_data.find(detail => detail.id === params.bookdetails);
    console.log(params.bookdetails)
    console.log(details)

    if (!details) {
        return <h1>Book not found</h1>;
    }

    return (
        <div>
            <HighBookDetail title={details.title} author={details.author} description={details.description} />
            <Route path={`/${match.path}`} exact >
                <div >
                    <Link to={`/${match.url}/comments`} > Load Books</Link>
                </div>
            </Route>
            <Route path={`/${match.path}/comments`}>
                {details.map((book) => {
                    return (
                        <Comments
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                        //   detailsID={bookID}
                        />
                    )
                })}
            </Route>
        </div>
    )
}