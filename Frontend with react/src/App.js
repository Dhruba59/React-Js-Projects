import './App.css';
import Layout from './components/layout/layout';
import Nav from './components/navbar/navbar';
import { BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
    
  );
}

export default App;
