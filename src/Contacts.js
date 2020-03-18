import React, { Component } from 'react'

class Contacts extends Component {
    render () {
        return (
            <li key={this.props.contact.id} className='contact-list-item'>
                <div
                    className='contact-avatar'
                    style={{
                    backgroundImage: `url(${this.props.contact.avatarURL})`
                    }}
                ></div>
                <div className='contact-details'>
                    <p>{this.props.contact.name}</p>
                    <p>{this.props.contact.handle}</p>
                </div>
                <button
                    onClick={() => this.props.removeContact(this.props.contact)}
                    className='contact-remove'>
                    Remove
                </button>
            </li>
        )
    }
}

export default Contacts