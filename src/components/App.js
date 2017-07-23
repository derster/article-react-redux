import React from 'react';
import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component{

  state = {articles:[]};

  addArticle = (article) => {
    let oldArticles = this.state.articles;
    article.id = Date.now();
    let newArticles = [...oldArticles, article];
    this.setState({articles:newArticles});
  }


  render(){
    return(
      <div className="container">
        <h1>Liste des courses</h1>
        <Form formTile="Ajouter un article"  addArticle={this.addArticle}/>
        <ItemList articles ={this.state.articles} />

      </div>
    )
  }
}

export default App;
