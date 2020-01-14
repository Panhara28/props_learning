import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Blog } from './components/Blog';

const data = [
  { title: "Title1", author: "Author1", content: "Content1" },
  { title: "Title2", author: "Author2", content: "Content2" },
  { title: "Title3", author: "Author3", content: "Content3" }
]

function App() {
  return (
    <div className="kl-container">
      <div className="row">
        {
          data.map((x)=> {
            return(
              <Blog 
                className="col-lg-6"
                title={ x.title } 
                author={x.author} 
                content={x.content}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
