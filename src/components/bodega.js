import React from 'react';
import axios from 'axios';
import Nav from './nav.js';
import Principal from './principal.js';
import Carrito from './carrito-compra.js';
import Detalle from './detalle.js';


class bodega extends React.Component {

  constructor(props){
    super(props);

    this.handleCompra = this.handleCompra.bind(this);
    this.revelCompra = this.revelCompra.bind(this);
    this.hideCompra = this.hideCompra.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.signOut = this.signOut.bind(this);
    this.onCompra= this.onCompra.bind(this);

    this.state = {
      productos: [],
      compras: [],
      estado: "main",
      counter: 0,
      objToview: {}
    }
  }


  componentWillMount(){
    axios.get('http://localhost:3000/productos/')
    .then((res) => {
      console.log(res.data.productos)
      this.setState({ productos: res.data.productos });
    })
  
  }



  handleCompra(obj){
    this.setState((prevState) =>({compras: prevState.compras.concat(obj), counter: prevState + 1 }));
    }

   revelCompra(){
       this.setState(()=>({estado: 'compras'}))
    }

   hideCompra(){
     this.setState(()=>({estado: 'main'}))
   }
   showDetail(obj){
     this.setState(()=>({estado: 'detalle', objToview: obj}))
   }

   getTotal(){
    
     let total = 0
     for (let i = 0; i < this.state.compras.length; i++) {
       total+= this.state.compras[i].precioUni * this.state.compras[i].purchased;
     }
     return total
   }

  handleViews(){
    if (this.state.estado === 'main') {
      return(
        <Principal
         productos={this.state.productos}
         handleCompra={this.handleCompra}
         showDetail={this.showDetail}/>
      )
    }
     if (this.state.estado === 'compras') {
      return(
            <Carrito
            compras={this.state.compras}
            getTotal={this.getTotal}
            onCompra={this.onCompra}/>
      )
    }
    if(this.state.estado === 'detalle'){
      return(
        <Detalle
        objToview={this.state.objToview}
        hideCompra={this.hideCompra}/>
      )
    }
  }


  onCompra(){
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...' 
    }
    for (let i = 0; i < this.state.compras.length; i++) {
        let index = this.state.compras[i]._id;
        let unidadesDis = this.state.compras[i].unidadesDis - this.state.compras[i].purchased;
        let stock = {
            unidadesDis 
        } 
        axios.put(`http://localhost:3000/productosStock/${ index }`, stock, {headers: headers})
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
      this.setState(()=>({compras: []}))
  }

  signOut() {
   console.log('salida')
  }

  render(){
    return(
      <div className="row main">

        <div className="container">
        <Nav
        revelCompra={this.revelCompra}
        hideCompra={this.hideCompra}
        counter={this.counter}
        signOut={this.signOut}/>
        {this.handleViews()}
      </div>
      </div>
    )
  }
}

export default bodega