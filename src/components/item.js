import React from 'react';


/*Aqui comvierto los props de disponibilidad en state para poder manipularlo
  y actualiza el nuevo disponible al hacer click en comprar
*/
class Item extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      available: this.props.available
    }
    /*let images = require.context('../../public/assets/img', true);*/
  }

  render(){
    return(
      <div className="col s12 m12 ">
        <div className="card medium hoverable">
          <div className="card-image">
            <img src= {'../'+this.props.img+''} alt={this.props.nombre}/>
            <span className="card-title amber-text">{this.props.nombre}</span>
          </div>
          <div className="card-content">
            <div>
              <p>Precio: ${this.props.precioUni}</p>
              <p>Stock :  {this.props.unidadesDis}</p>
            </div>
            <div></div>
          </div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const amount = parseInt(e.target.elements.amount.value)
            this.props.handleCompra({
              _id :  this.props._id,
              nombre: this.props.nombre,
              precioUni: this.props.precioUni,
              unidadesDis:this.props.unidadesDis,
              img: this.props.img,
              purchased: amount
              })
              this.setState((prevState)=>({unidadesDis: prevState.unidadesDis - amount}));
              }
            }
          className="card-action">
            <div className="card-action-left">
              <button
              className="btn-floating btn-small amber"
              onClick={(e)=>{
                     this.props.showDetail({
                      _id :  this.props._id,
                      nombre: this.props.nombre,
                      precioUni: this.props.precioUni,
                      img: this.props.img,
                      unidadesDis: this.props.unidadesDis
                      })}
                }
              >
              <i className="material-icons">visibility</i>
              </button>
              <button
                className="btn-floating btn-small indigo">
                  <i className="material-icons">shopping_basket</i>
                </button>
            </div>
            <div className="card-action-right">
              <input
                type="number"
                name="amount"/>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Item
