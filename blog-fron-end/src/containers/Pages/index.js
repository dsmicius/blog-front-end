import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BlogsPage from "./BlogsPage/BlogsPage";
import NewBlogPage from "./NewBlogPage/NewBlogPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import LoginPage from "./LoginPage/LoginPage";
import NewBlogPage2 from "./NewBlogPage/NewBlogPage2";

export default () => (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/blogs/create" element={<NewBlogPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
    </Routes>
);