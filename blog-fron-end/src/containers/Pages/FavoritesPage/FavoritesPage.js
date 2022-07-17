import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { addToFavorite, removeFromFavorite } from '../../../redux/Favorite/favoriteActions';

const FavoritesPage = () => {

    const blogItems = useSelector(state => state.favorite.items);

    const dispatch = useDispatch();

    const handleRemoveBlogToFavorite = (blogId) => {
        dispatch(removeFromFavorite(blogId))
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
                                    <Button type="button"
                                            className="btn btn-primary position-relative tableDeleteButton"
                                            onClick={() => handleRemoveBlogToFavorite(blog.blogId)}>
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <br/>
            <hr/>
            <p className='text-center p-4'>Total items: {blogItems.length}</p>

        </Container>
    );
};

export default FavoritesPage;