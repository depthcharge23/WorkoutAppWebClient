import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Custom Components
import Header from "../header/Header";

const App = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
