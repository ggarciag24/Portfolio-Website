import React from 'react';
import './App.css';
import MainPage from './components/MainPage'
import { Menu } from 'semantic-ui-react'
import {Route, Switch, Link, Redirect} from 'react-router-dom';


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (
      <React.Fragment>
        <Menu stackable>
          <Link to='/home'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
               Home
             </Menu.Item>
           </Link>
        </Menu>
      <div className="App">
        <switch>
        <Route exact path="/" render={() => <MainPage />} />
        </switch>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
