import './App.css';
import {Row,Col} from 'react-bootstrap'
import Filters from './components/Filters';
import Home from './components/Home';
import './bootstrap.min.css'


function App() {
  return (
    <Row >
      <Col md={3} sm={3} lg={3}>
          <Filters/>
      </Col>
      <Col className="mt-5" md={8} sm={8} lg={8}>
          <Home/>
      </Col>
    </Row>
  );
}

export default App;
