import styled from "styled-components";

const Container = ({children}) => {
    return(
        <Body>{children}</Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 3px solid #e39f17;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: #4e3f21 -1px 3px 8px 0px;

`


export default Container;