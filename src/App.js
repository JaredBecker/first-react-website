import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/products" component={Products} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
