import React, { Component } from 'react'
import * as ContactsApi from './utils/ContactsApi'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'


class App extends Component {
  state = {
    screen: 'list',
    contacts: []
  }

  componentDidMount() {
    ContactsApi.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  onNavigate = (screen) => {
    this.setState(() => ({
      screen: screen
    }))
  }

  removeContact = (contact) => {
    ContactsApi.remove(contact)
    
    this.setState((currState) => ({
      contacts: currState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  render () {
    const listContactsComponent = (
      <ListContacts 
        contacts={this.state.contacts} 
        removeContact={this.removeContact} 
        onNavigate={this.onNavigate} />
    )
    const createContactComponent = (
      <CreateContact />
    )

    return <div className="App">
      {this.state.screen === 'list' && (listContactsComponent)}
      {this.state.screen === 'create' && (createContactComponent)}
    </div>
  }
}

export default App;
