import { useEffect, useState } from 'react';
import { deleteBlogEndpoint, getBlogsEndpoint } from '../../../api/apiEndpoints';
import { Button, Card, Col, Container, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../../redux/Favorite/favoriteActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, NavLink } from 'react-router-dom';

const BlogsPage = () => {

    const authUser = useSelector(state => state.user);

    const dispatch = useDispatch();

    const [blogItems, setBlogItems] = useState([]);
    const [blogItemDeleted, setBlogItemDeleted] = useState(null);


    useEffect(() => {
        console.log('BlogPageEfect');
        if (blogItemDeleted == null || blogItemDeleted) {
            getBlogsEndpoint()
                .then(({ data }) => {
                    setBlogItems(data.blogs);
                    setBlogItemDeleted(false);
                })
                .catch((error) => console.log('error', error));
        }
    }, [blogItemDeleted]);

    const onDeleteClick = (blogId) => {

        deleteBlogEndpoint(blogId, {
            headers: {
                'Authorization': `Bearer ${authUser.jwtToken}`,
            },
        }).then(() => setBlogItemDeleted(true))
            .catch((error) => console.log('ERROR:', error));
    };

    const handleAddBlogToFavorite = (blog) => {
        dispatch(addToFavorite(blog));
    };

    return (
        <Container fluid>
            <Row xs={'auto'} md={'auto'} className='g-4'>
                {
                    blogItems.map(blog => (
                        <Col key={blog.blogId}>
                            <Card style={{ width: '28rem', padding: '5px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <NavLink key={'blog'}
                                                 to='/blog'
                                                 state={{ blogItem: blog }}
                                        >{blog.subject}</NavLink>
                                    </Card.Title>
                                    <hr />
                                    <Card.Text>{blog.description.length < 100 ? blog.description : blog.description.substring(0, 500) + ' ...'}</Card.Text>
                                    <hr />
                                    <Card.Subtitle className='mb-2 text-muted' style={{ fontSize: 12 }}>

                                        <p>Author: {blog.author}</p>
                                        <p>Created: {blog.createDate}</p>
                                        <p>Comments: {blog.comments.length}</p>

                                    </Card.Subtitle>
                                    <div style={{ display: 'grid', gridTemplateColumns: '90% 10%' }}>
                                        <div>
                                            <button
                                                type='button'
                                                className='btn btn-danger'
                                                onClick={() => onDeleteClick(blog.blogId)}
                                                style={{ marginRight: 7 }}>
                                                DELETE
                                            </button>
                                            {/*<Card.Link className='btn btn-primary'*/}
                                            {/*           style={{ marginRight: 7 }}>*/}
                                            {/*    EDIT*/}
                                            {/*</Card.Link>*/}
                                            <NavLink
                                                className='btn btn-primary'
                                                key={'blog'}
                                                to='/blogEdit'
                                                state={{ blogItem: blog }}
                                            >EDIT</NavLink>
                                        </div>
                                        <div style={{ alignSelf: 'self-end' }}>
                                            <Button className='btn btn-success'
                                                    onClick={() => handleAddBlogToFavorite(blog)}>
                                                <FontAwesomeIcon className='position-relative'
                                                                 icon={solid('thumbs-up')} />
                                            </Button>
                                        </div>
                                    </div>
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