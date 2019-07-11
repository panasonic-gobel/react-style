import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  {Home}  from './pages/Home'
import { About } from './pages/About'
import { Advice } from './pages/Advice'
import { Job } from './pages/Job'
import { Contact } from './pages/Contact'
import  Login  from './pages/Login'
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
