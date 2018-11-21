import React, { Component } from 'react';
import * as loginService from '../service/Loginservice';
class login_Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        username: '',
                        password: ''      
                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          const {name,value}=event.target;
        this.setState({
             [name]:value
        });
       }
    
      handleSubmit(event) {
          var isLoginSuccess =loginService.logIn(this.state.username, this.state.password);
           if (isLoginSuccess){
              alert('welcome to login system')
          }else{
            alert('incorrect username and password')

          }
            event.preventDefault();         
      }
    render() { 

        return (
         <div className="container">         
            <div class=" card  card-position" >
                  <div class="card-body">
                      <form onSubmit={this.handleSubmit}>
                      <h1 className="textStyle">Welcome to LogIn</h1>       
                     <p className="textStyle">Enter you username</p>   
                        <input className =" input-fields " type="text" placeholder = "username" name="username" value={this.state.username} onChange={this.handleChange} />             
                        <p className="textStyle">Enter you password</p>
                        <p> <input className =" input-fields " type="password" placeholder ="password" name="password" value={this.state.password} onChange={this.handleChange} /></p>
                        <button className = "btn btn-warning btn-lg" type="submit" >Login</button>
                    </form>
                 </div>
            </div>
            
          </div>
          );
        }
    }
 
export default login_Form;