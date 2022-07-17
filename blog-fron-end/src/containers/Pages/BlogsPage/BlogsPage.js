import { useContext, useEffect, useState } from 'react';
import { deleteBlogEndpoint, getBlogsEndpoint } from '../../../api/apiEndpoints';
import { Button, Card, Col, Container, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../../redux/Favorite/favoriteActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const BlogsPage = () => {

    const authUser = useSelector(state => state.user);

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
                                    <Card.Title>{blog.subject}</Card.Title>
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
                                            <Card.Link className='btn btn-primary'
                                                       style={{ marginRight: 7 }}>
                                                EDIT
                                            </Card.Link>
                                        </div>
                                        <div style={{ alignSelf: 'self-end' }}>
                                            <Button className='btn btn-success'
                                                    onClick={() => handleAddBlogToFavorite(blog)}>
                                                <FontAwesomeIcon className='position-relative'
                                                                 icon={solid('thumbs-up')} />
                                            </Button>
                                        </div>
                                    </div>
                                    {/*<Card.Subtitle className='mb-2 text-muted' style={{ fontSize: 12 }}>*/}
                                    {/*    <p>Author: {blog.author}</p>*/}
                                    {/*    <p>Created: {blog.createDate}</p>*/}
                                    {/*    <p>Comments: {blog.comments.length}</p>*/}
                                    {/*</Card.Subtitle>*/}
                                    {/*<div style={{ justifyContent: 'end', display:'grid' }}>*/}
                                    {/*    <Button className='btn btn-success'*/}
                                    {/*            onClick={() => handleAddBlogToFavorite(blog)}>*/}
                                    {/*        <FontAwesomeIcon className='position-relative' icon={solid('thumbs-up')} />*/}
                                    {/*    </Button>*/}
                                    {/*</div>*/}
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