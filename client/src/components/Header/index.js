import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
function Header() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Google Book Search!</h1>
                <p>
                    Welcome to Google Book Search. Please use the search box to search for a book or
                    navigate to saved books that you've already searched for. We apologize if we do not
                    have a match for the book that you searched for.
    </p>
            </Container>
        </Jumbotron>
    )
}

export default Header