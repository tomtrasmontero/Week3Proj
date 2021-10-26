import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import SearchForm from "./Form";
import Transactions from './Transactions';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div className="text-center">Block Explorer !</div>
        </Col>
        <SearchForm/>
      </Row>
      <Row>
        <Transactions/>
      </Row>
    </Container>
  );
}

export default App;
