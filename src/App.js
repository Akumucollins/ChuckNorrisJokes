import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    category: [],
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setAppState({ loading: false, category: res });
        console.log(res)
      });
  }, [setAppState]);

  return (
    <div>
      <div className="App">
        <div className="container">
          <h1>Chuck Norris Joke</h1>
        </div>
        <div className="category-container">
          <ListLoading
            isLoading={appState.loading}
            category={appState.category}
          />
        </div>
        <footer>
          <div className="footer">
            Built{" "}
            <span role="img" aria-label="love">
              by
            </span>{" "}
            Collins Akumu
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
// import React, { Component } from 'react'
// import axios from 'axios'
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        value: '',
//        categories: [],
//        url: ''
//     }
//  }

//  componentDidMount() {
//     this.getJoke()
//  }

//  getJoke() {
//     let url = 'https://api.chucknorris.io/jokes/random'

//     axios.get(url)
//        .then(res => {
//           let data = res.data
//           console.log(data)

//           this.setState({
//              value: data,
//              categories: data,
//              url: data
//           })
//        })
//  }

//  getNewJoke = () => {
//     this.getJoke()
//  }

//  render() {
//     const { value, categories } = this.state
//     return (
//        <div id='wrapper'>
//           <h1 className='title'>Random Quote App</h1>
//           <div id='quote-box'>
//              <QuoteBox value={value} categories={categories} />
//              <div id='buttons'>
//                 <Button categories={categories} onClick={this.getNewJoke} />
//              </div>
//           </div>
//        </div>
//     )
//  }
// }

// // Quote Box component
// const QuoteBox = ({ value, categories }) => { //destructuring
//  return (
//     <React.Fragment>
//        <div id='text'><p>{value}</p></div>
//        <div id='author'><h5>{categories}</h5></div>
//     </React.Fragment>
//  )
// }

// //Button component
// const Button = ({ onClick, categories }) => {
//  return (
//     <button className='button' id='new-quote' onClick={onClick}>{categories}</button>
//  )
// }

// export default App;