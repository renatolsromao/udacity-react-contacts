import React, { Component } from 'react'
import * as ContactsApi from './utils/ContactsApi'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
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
      />
    )

    return (
      <div className="App">
        <Route exact path='/' render={() => listContactsComponent} />
        <Route path='/create-contact' component={CreateContact} />
      </div>
    )
  }
}

export default App;
