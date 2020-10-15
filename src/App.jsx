import React,{useEffect} from 'react'
import Login from './Components/Login'
import Home from './Components/Home'
import './styles/App.css'
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Upload from './Components/Upload';

function App() {
    const [{user},dispatch] = useStateValue();
    useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        if(authUser)
        {
            dispatch({
              type:"SET_USER",
              user:authUser
            })
        }
        else{
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
    },[])
    return (
        <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/upload" component={Upload}/>
        
        </Switch>
      </div>
      </Router>
    );
  }
export default App;