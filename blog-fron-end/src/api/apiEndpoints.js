import HTTP from './axiosConfig';

const getBlogsEndpoint = () => HTTP.get('/blogs');

const createBlogEndpoint = (blogData, headers) => HTTP.post('/blogs', blogData, headers);

const deleteBlogEndpoint = (blogId, config) => HTTP.delete(`/blogs/${blogId}`, config);

const loginEndpoint = (loginData) => HTTP.post('/login', loginData);

export {
    getBlogsEndpoint,
    createBlogEndpoint,
    deleteBlogEndpoint,
    loginEndpoint,
};
