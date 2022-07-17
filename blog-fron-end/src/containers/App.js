import FooterContainer from './FooterContainer/FooterContainer';
import HeaderContainer from './Header/HeaderContainer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';
import '../i18n';
import { Provider } from 'react-redux';
import store from '../redux/store';


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='mainApp'>
                        <HeaderContainer />
                        <Pages />
                    <FooterContainer />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
