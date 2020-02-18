import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Articles: []
    }
  }
  componentDidMount(){
      axios.get("/api/scraping").then((UrlResponse)=>{
    console.log(UrlResponse.data);
    this.setState({Articles: [UrlResponse.data]})

    })
  }
  render(){
      return (
        <div class="container">
          <div className="App">
            <h1 class="header mt-4 text-success">WebScraping Articles</h1>

              {this.state.Articles.map((element)=>{
                return <div class="card mt-4"> <h2>{element.headline}</h2>

                <img class="card-img mt-4" src={element.img} alt="Card image cap"/>

              <div class="card-body">
              <p class="card-text">{element.summary}<a href={element.articlelink} class="readMore text-primary"> <br/>READ MORE ...</a></p>

              </div>
            </div>
              })}             
          </div>
        </div>
    );
  }
}

export default App;
