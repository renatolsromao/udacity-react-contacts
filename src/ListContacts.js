import React, { Component } from "react"
import PropTypes from 'prop-types'
import Contacts from "./Contacts"
import { Link } from "react-router-dom"

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired,
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
      }

    clearQuery = () => {
        this.updateQuery('')
    }

    render () {
        const { query } = this.state
        const { contacts, removeContact } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (c.name.toLowerCase().includes(query.toLowerCase())))
            
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search Contacts'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                <Link 
                    to='/create-contact' 
                    className='add-contact'
                >Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showingContacts.map((contact) => (<Contacts contact={contact} removeContact={removeContact} />))}
                </ol>
            </div>    
        )
    }
}

export default ListContacts