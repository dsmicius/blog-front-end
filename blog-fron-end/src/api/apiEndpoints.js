import HTTP from './axiosConfig';

const getBlogsEndpoint = () => HTTP.get("/blogs");

const createBlogEndpoint = (blogData, headers) => HTTP.post("/blogs", blogData, headers);

const loginEndpoint = (loginData) => HTTP.post("/login",loginData);

export {
    getBlogsEndpoint,
    createBlogEndpoint,
    loginEndpoint,
}
