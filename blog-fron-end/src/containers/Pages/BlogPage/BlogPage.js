import { useLocation } from 'react-router-dom';

const BlogPage = () => {

    const location = useLocation();

    console.log("resultatas",location.state);

    return (
        <>
            <h2> Blog page</h2>
        </>
    );
};

export default BlogPage;