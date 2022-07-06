import HTTP from './axiosConfig';

const getBlogsEndpoint = () =>
    HTTP.get("/blogs")


export {
    getBlogsEndpoint
}
