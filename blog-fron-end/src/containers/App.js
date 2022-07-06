import FooterContainer from "./FooterContainer/FooterContainer";
import HeaderContainer from "./Header/HeaderContainer";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Pages from "./Pages";

function App() {
    return (
        <BrowserRouter>
            <div className="mainApp">
                <HeaderContainer/>
                <Pages/>
                <FooterContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
