import React from 'react';

const ItemList = (props) => {
    return(
     <div>
       <h1>Votre de course</h1>
        {props.articles.map(article => <div key={article.id}>{article.quantity} {article.name}</div>) }
     </div>
    )
}

export default ItemList;
