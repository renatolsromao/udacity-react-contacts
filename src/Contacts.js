import React from 'react'

function Contacts(props) {
    const people = props.people
    return (
        <ol>
            {people.map(person => {
                return <li key={person.name}>{person.name}</li>
            })}
        </ol>
    )
}

export default Contacts