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

  createContact = (contact) => {
    ContactsApi.create(contact)
      .then((contact) => {
        this.setState((currState) => ({
          contacts: currState.contacts.concat([contact])
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
    const ListContactsComponent = (
      <ListContacts 
        contacts={this.state.contacts} 
        removeContact={this.removeContact}
      />
    )
    const CreateContactComponent = (
      <CreateContact
        createContact={this.createContact}
      />
    )

    return (
      <div className="App">
        <Route exact path='/' render={() => (ListContactsComponent)} />
        <Route path='/create-contact' render={() => (CreateContactComponent)} />
      </div>
    )
  }
}

export default App;
