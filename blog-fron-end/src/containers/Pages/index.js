import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import BlogsPage from "./BlogsPage/BlogsPage";
import NewBlogPage from "./NewBlogPage/NewBlogPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";
import LoginPage from "./LoginPage/LoginPage";
import BlogPage from './BlogPage/BlogPage';

export default () => (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/blogs/create" element={<NewBlogPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
    </Routes>
);