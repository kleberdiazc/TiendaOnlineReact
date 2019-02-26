import React from 'react';

class Detalle extends React.Component {


  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return(
      <div>
        <div className="card white detail">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card large">
                <div className="card-image">
                    <img src={this.props.objToview.img} alt='' />
                    <span className="card-title amber-text">{this.props.objToview.nombre}</span>
                </div>
                <div className="card-content">
                  <p><strong>Precio: </strong>{this.props.objToview.precioUni}</p>
                  <p><strong>Stock: </strong>{this.props.objToview.unidadesDis}</p>
                </div>
                <div className="card-action">
                  <button
                    className="btn-floating btn-small indigo"
                    onClick={this.props.hideCompra}>
                    <i className="material-icons">shopping_basket</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Detalle
