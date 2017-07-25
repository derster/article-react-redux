import React from 'react';

class Article extends React.Component{
    state = { isInEditMode: false};
    toggleEditMode = () =>{
        this.setState({isInEditMode: !this.state.isInEditMode})
    }

    handleQuantityEdit = (event, article) =>{
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    handleNameEdit = (event, article) =>{
        article.name = event.target.value;
        this.props.editArticle(article);
    }
    render(){
        return(
            <div>
                

                {
                    this.state.isInEditMode ?
                    <span>

                    
                        <input 
                        type="number" 
                        value={this.props.data.quantity}
                        onChange={(event) => this.handleQuantityEdit(event, this.props.data)}
                        />
                        <input 
                        type="text" 
                        value={this.props.data.name}
                        onChange={(event) => this.handleNameEdit(event, this.props.data)}
                        />

                        </span>

                        : <span> {this.props.data.quantity} {this.props.data.name}</span>
                }

                <button className="btn btn-secondary" onClick={() => this.toggleEditMode()}>
                    
                    {this.state.isInEditMode ?
                     <span>Sauvegauder</span> 
                    :
                    <span>Modifier </span>
                    }
                    
                </button>
                
            </div>
        )
    }
    
}

export default Article;