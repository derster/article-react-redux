import React from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component{

  // state = {articles:[]};

  // addArticle = (article) => {
  //   let oldArticles = this.state.articles;
  //   article.id = Date.now();
  //   let newArticles = [...oldArticles, article];
  //   this.setState({articles:newArticles});
  // }

  // addArticle = (article) => {
  //   //this.props.dispatch({type: 'ADD_ARTICLE', payload: article});
  //   this.props.addArticle(article);
  // }

  render(){
    return(
      <div className="container">
        <h1>Liste des courses</h1>
        <Form formTile="Ajouter un article"  addArticle={this.props.addArticle}/>
        <ItemList articles ={this.props.articles} />

      </div>
    )
  }
} //end class

const addArticleActionCreator = (article) =>{
    return{
      type: 'ADD_ARTICLE', 
      payload: article
    } 
  };

const mapStateToProps = (state) =>{
  return{
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      addArticle: (article) => {
        dispatch(addArticleActionCreator(article));
      }
    }
  }


//export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
