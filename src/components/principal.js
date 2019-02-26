import React from 'react';
import Item from './item.js'

class Principal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search: ""
    }
  }
  render(){
    let filterContent = this.props.productos.filter(
      (producto)=>{
        console.log(producto);
        return producto.nombre.toLowerCase().includes(this.state.search.toLowerCase());
      }
    )
    return(
      <div className="card store-body">
        <div className="row">
          <div className="col s6 m5">
          <h4 className="flow-text">
          Catalogo de productos
          </h4>
          </div>
          <div className="col s6 m7">

            <div className="row">
              <div className="col s6"></div>
              <div className="col s12 m6 input-field">
              <i className="material-icons prefix">search</i>
              <input type="text"
                id="item"
                placeholder="Que estas bscando.."
                onChange={(e)=>{
                    e.persist();
                   this.setState(()=> ({search: e.target.value}))

                }}
                className="text-indigo"/>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
        {
          filterContent.map((producto)=>(
              <Item
              key={producto._id}
              _id ={producto._id}
              nombre={producto.nombre}
              precioUni={producto.precioUni}
              img={producto.img}
              unidadesDis={producto.unidadesDis}
              handleCompra={this.props.handleCompra}
              showDetail ={this.props.showDetail}
              />
          ))
        }

        </div>
      </div>
    )
  }
}

export default Principal;