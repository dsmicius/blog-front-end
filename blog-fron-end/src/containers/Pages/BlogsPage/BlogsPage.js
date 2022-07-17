import { useContext, useEffect, useState } from 'react';
import { deleteBlogEndpoint, getBlogsEndpoint } from '../../../api/apiEndpoints';
import { Button, Card, Col, Container, ListGroupItem, Row } from 'react-bootstrap';

import { AuthUserContext } from '../../../contexts/AuthUserContext';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../../redux/Favorite/favoriteActions';

const BlogsPage = () => {

    // const { authUser } = useContext(AuthUserContext);
    const authUser = useSelector(state => state.user)

    const dispatch = useDispatch();

    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        getBlogsEndpoint()
            .then(({ data }) => {
                setBlogItems(data.blogs);
            })
            .catch((error) => console.log('error', error));

    }, []);

    const onDeleteClick = (blogId) => {
        deleteBlogEndpoint(blogId, {
            headers: {
                'Authorization': `Bearer ${authUser.jwtToken}`,
            },
        })
            .catch((error) => console.log('ERROR:', error));
    };

    const handleAddBlogToFavorite = (blog) => {
        dispatch(addToFavorite(blog))
    }

    return (
        <Container fluid>
            <Row xs={'auto'} md={'auto'} className='g-4'>
                {
                    blogItems.map(blog => (
                        <Col key={blog.blogId}>
                            <Card style={{ width: '28rem', padding: '5px' }}>
                                <Card.Body>
                                    <Card.Title>{blog.subject}</Card.Title>
                                    <Card.Subtitle className='mb-2 text-muted'>{blog.author}</Card.Subtitle>
                                    <Card.Text>{blog.description}</Card.Text>
                                    <button
                                        type='button'
                                        className='btn btn-danger'
                                        onClick={() => onDeleteClick(blog.blogId)}
                                    >
                                        DELETE
                                    </button>
                                    <Card.Link className='btn btn-success'
                                    >EDIT</Card.Link>
                                    <Button onClick={() => handleAddBlogToFavorite(blog)}>
                                        Favorite
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default BlogsPage;