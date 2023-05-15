
import './App.css';
import Header from "./components/Header"
import Book from "./components/Book"
import Footer from "./components/Footer"
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container style={{}}>
        <Header/>
        <Book/>
        <Footer/>
    </Container>
    
  );
}

export default App;
