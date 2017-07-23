import React from 'react';

class Form extends React.Component{
  state = {
    name: '',
    quantity: 0
  };

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      this.props.addArticle(this.state);
      this.setState({ name:'', quantity:0})
  }

  render(){
    return(
      <div>
        <h1>{this.props.formTile}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="quantity"
              value={this.state.quantity}
              onChange={(event) => this.setState({quantity: event.target.value})}/>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="article"
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.setState({name: event.target.value})}/>
          </div>
            <input type="submit" value="Ajouter" className="btn btn-success" />

        </form>
      </div>
    )
  }
}

export default Form;
