import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'

export  class Login extends Component {
    constructor(props){
        super(props);
    
        this.handleSignIn = this.handleSignIn.bind(this);
    
        //State
        this.state ={
            email: '',
            password: '',
            error:{
              message: ''
            },
            redirect : false
    
        }
    }
    
  handleSignIn(e){
    const {email, password} = this.state;
    console.log(this.state)
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...' 
    }
    let user = {
      email,
      password
    } 
    axios.post('http://localhost:3000/login/', user, {headers: headers})
        .then((response) => {
          console.log(response)
          this.setState({ redirect: true })
        })
        .catch((error) => {
          console.log(error)
        })

  }
  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/tienda'/>;
     }
    return (
             
        <div className="container login">
            <div className="row">
            <div className="col s10 offset-s1 m6 offset-m3">
                <div className="card white login-form">
                <div className="text-center">Ingreso</div>

                <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                    type="email"
                    placeholder="ingresa tu email"
                    onChange={e => {
                    e.persist();
                    return this.setState(()=> ({email: e.target.value}))
                    }}
                    required/>
                </div>

                <div className="input-field">
                    <i className="material-icons prefix">vpn_key</i>
                    <input
                    type="password"
                    placeholder="ingresa tu password"
                    onChange={e => {
                    e.persist();
                    return this.setState(()=> ({password: e.target.value}))
                    }}/>
                </div>

                <div className="input-field" >
                    <p>Registrate si no eres usuario</p>
                    <p className="error">{this.state.error.message}</p>
                    <div className="row">
                    <div className="col">
                    <button
                    onClick={this.handleSignIn}
                    className="btn-flat amber white-text login-btn"
                    style={{marginTop:'5px'}}
                    >Entra
                    </button>
                    </div>
                    <div className="col">
                    </div>
                </div>
                </div><div className="row login">
                </div>
            </div>
            </div>
            </div>
      </div>
    )
  }
}
