import React from 'react'
import '../styles/Login.css'
import logo from '../logo.png'
import {auth,db,provider} from '../firebase'
import {useHistory} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Home from './Home'

function Login() {
    let history = useHistory();
    const [{user},dispatch] = useStateValue()
    const google_login = ()=>{
        
        auth.signInWithPopup(provider).then((cred)=>{
            history.push("/");
        }).catch((err)=>{
            console.log(err);
        })
    }
    const check_login = ()=>{
        if(user){
            history.push("/");
        }
    }
    check_login();
   
        return (
            <div className="login">
                <div className="center">
                    <img src={logo} alt=""/>
                    <h2>Login</h2>
                    <p>Welcome back</p>
                    <button onClick={google_login}><i className="fab fa-google"></i> Login with Google</button>
                    <div className="or">
                        <p>OR</p>
                    </div>
                    <form action="">
                        <div className="control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"/>
                        </div>
                        <div className="control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <div className="control">
                            <button type="submit">Login</button>
                        </div>
                        
                    </form>
                    <div className="signup">
                        <p>Don't have an account?<a href="#/">Join</a></p>
                    </div>
                </div>
                </div>
            
            )
    
    
}

export default Login
