import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../src/components/home/home'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

            </div>
        )
    }
}

export default App

