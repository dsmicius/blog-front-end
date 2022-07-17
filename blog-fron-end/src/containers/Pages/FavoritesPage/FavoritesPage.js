import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { addToFavorite, removeFromFavorite } from '../../../redux/Favorite/favoriteActions';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoritesPage = () => {

    const blogItems = useSelector(state => state.favorite.items);

    const dispatch = useDispatch();

    const handleRemoveBlogToFavorite = (blogId) => {
        dispatch(removeFromFavorite(blogId));
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
                                        <div style={{ display: 'grid', gridTemplateColumns: '90% 10%' }}>
                                            <div>
                                                <p>Author: {blog.author}</p>
                                                <p>Created: {blog.createDate}</p>
                                                <p>Comments: {blog.comments.length}</p>
                                            </div>
                                            <div style={{ alignSelf: 'self-end' }}>
                                                <Button type='button'
                                                        className='btn btn-danger position-relative tableDeleteButton'
                                                        onClick={() => handleRemoveBlogToFavorite(blog.blogId)}>
                                                    <FontAwesomeIcon className='position-relative'
                                                                     icon={solid('thumbs-down')} />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <br />
            <hr />
            <p className='text-center p-4'>Total items: {blogItems.length}</p>

        </Container>
    );
};

export default FavoritesPage;