import styled from 'styled-components'

import Form from '../form/Form'


const Registration = () => {

    const createPerson = (data) => {
        
        fetch('http://localhost:8080/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => resp.json())
        .then(() => console.log("this person was created succesfully"))
        .catch((err) => console.error(err))
    }

    return (
        <div>
            <Title>create account</Title>
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