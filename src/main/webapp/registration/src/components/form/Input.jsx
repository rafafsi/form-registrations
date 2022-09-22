import styled from "styled-components";

const Input = ({ icon, type, text, handleOnChange, placeholder, name }) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <InputSty
                type={type}
                text={text}
                placeholder={placeholder} 
                onChange={handleOnChange}
                name={name}
                 />
        </Wrapper>
    )
}

const InputSty = styled.input`
    font-family: 'Reem Kufi Fun', sans-serif;
    padding: 5px 5px 5px 30px;
    margin: 10px;
    flex: 1;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

const Icon = styled.div`
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    left: 14px;
    height: 28px;
   
`
export default Input;