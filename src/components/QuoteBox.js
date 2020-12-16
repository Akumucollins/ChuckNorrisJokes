import React from "react"

function QuoteBox() {
    // Quote Box component
    // eslint-disable-next-line
    const QuoteBox = ({ quote, author }) => { 
        //destructuring
        return (
        <React.Fragment>
            <div id='text'><p>{quote}</p></div>
            <div id='author'><h5>{author}</h5></div>
        </React.Fragment>
        )
    }
}
export default QuoteBox 
