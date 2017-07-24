import React from 'react';

import Article from './Article';

const ItemList = (props) => {
    return(
     <div>
       <h1>Votre de course</h1>
        {props.articles.map(article => <Article data={article} key={article.id}/>) }
     </div>
    )
}

export default ItemList;
