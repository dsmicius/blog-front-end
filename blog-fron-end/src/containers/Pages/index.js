import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";

export default () => (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
);