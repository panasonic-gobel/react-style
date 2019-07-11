import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
import  {Home}  from './pages/Home'
=======
import { Home } from './pages/Home'
>>>>>>> e2f2c96f59a3f9f69238474bc35c28a2928bdcc4
import { About } from './pages/About'
import { Advice } from './pages/Advice'
import { Job } from './pages/Job'
import { Contact } from './pages/Contact'
<<<<<<< HEAD
import  Login  from './pages/Login'
=======
import { Login } from './pages/Login'
>>>>>>> e2f2c96f59a3f9f69238474bc35c28a2928bdcc4
import { Register } from './pages/Register'
import { Layout } from './components/Layout'
import { Navbar1 } from './components/Navbar'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar1 />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/advice' component={Advice} />
                            <Route path='/job' component={Job} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        )
    }
}

export default App
