import React from 'react';
import './App.css';
import MainPage from './components/MainPage'
import LibraryPage from './components/LibraryPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import { Menu, Icon} from 'semantic-ui-react'
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
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}> Home </Menu.Item>
          </Link>
          <Link to='/library'>
            <Menu.Item name='library' active={activeItem === 'library'} onClick={this.handleItemClick}> Library </Menu.Item>
          </Link>
          <Link to='/about'>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}> About </Menu.Item>
          </Link>
          <Link to='/contact'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}><Icon link name='address book outline'/> Contact </Menu.Item>
          </Link>
        </Menu>
      <div className="App">
        <switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/home" render={() => <MainPage />} />
        <Route exact path="/library" render={() => <LibraryPage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route exact path="/contact" render={() => <ContactPage />} />
        </switch>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
