import FooterContainer from "./FooterContainer/FooterContainer";
import HeaderContainer from "./Header/HeaderContainer";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Pages from "./Pages";
import {AuthUserContext, initialAuthUserObj} from '../contexts/AuthUserContext';
import {saveToSessionStorage, StorageKey} from "../utils/saveToSessionStorage";
import {useState} from "react";
import "../i18n"


function App() {

    const [authUser, setAuthUser] = useState(initialAuthUserObj)

    const authContextValue = {
        authUser,
        putAuthUser: (data) => {  // data = { username: '', fullname: '', jwtToken: ''}
            setAuthUser(data)
            saveToSessionStorage(StorageKey.jwt, data.jwtToken)
        },
    }

    return (
        <BrowserRouter>
            <div className="mainApp">
                <AuthUserContext.Provider value={authContextValue}>
                    <HeaderContainer/>
                    <Pages/>
                </AuthUserContext.Provider>
                <FooterContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
