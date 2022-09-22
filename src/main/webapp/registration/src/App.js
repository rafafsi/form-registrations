import styled from 'styled-components'
import Container from './components/layout/Container';

import Registration from './components/pages/Registration';

const App = () => {
  return (
    <Body>
      <Container>
        <Registration />
      </Container>
    </Body>
  );
}


const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Reem Kufi Fun', sans-serif;
  background-color: #ffbb33;

`

export default App;
