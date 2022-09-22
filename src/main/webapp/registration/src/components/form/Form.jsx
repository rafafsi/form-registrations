import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

import { BiUser } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineIdentification } from 'react-icons/hi'

// import { cpfMask } from "./cpf/mask";


const Form = ({handleSubmit}) => {
    
    const [data, setData] = useState({});


    const submit = (e) => {
        e.preventDefault();
        handleSubmit(data)
    }


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (

        <div>
            <FormSty onSubmit={submit}>
                <Input 
                    type="text"
                    text="name"
                    name="name"
                    placeholder="Name"
                    handleOnChange={handleChange}
                    icon={ <BiUser />}
                    />
                <Input 
                    type="text"
                    text="email"
                    name="email"
                    placeholder="E-mail"
                    handleOnChange={handleChange}
                    icon={ <MdOutlineEmail />}
                    />
                <Input 
                    type="text"
                    text="cpf"
                    name="cpf"
                    placeholder="CPF"
                    handleOnChange={handleChange}
                    icon={ <HiOutlineIdentification />}
                />

                <ButtonSty>Sign up</ButtonSty>
            </FormSty>
        </div>
    )
}

const FormSty = styled.form`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    
    * {
    font-family: 'Reem Kufi Fun', sans-serif;
    }
`

const ButtonSty = styled.button`
    padding: 5px;
    margin: 10px;
    transition: 0.5s;
    background-color: #ffbb33;
    border: 2px solid #e39f17;
    color: #000;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #e39f17;
    }
`

export default Form;