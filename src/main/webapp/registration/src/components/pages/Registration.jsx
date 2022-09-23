import { useState } from 'react'
import styled from 'styled-components'

import Form from '../form/Form'
import Message from '../form/Message'


const Registration = () => {

    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    const createPerson = (data) => {
        
    
        fetch('http://localhost:8080/people', {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if(response.ok) {
                    response.json()
                } else {
                    throw new Error("Something went wrong.")
                }
            })
            .then(() => {
                setMessage("New account added successfully!")
                setType('success')
            })
            .catch((err) => {
                alert(`Something went wrong: ${err}`)

            })
    }

    return (
        <div>
            <Title>create account</Title>
            {message && <Message type={type} msg={message}/> }
            <Form handleSubmit={createPerson}/>
        </div>

    )
}


const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  padding: 1.5rem;
  border-bottom: #e39f17 2px solid;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export default Registration;