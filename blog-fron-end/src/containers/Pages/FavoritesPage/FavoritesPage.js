import { useSelector } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const FavoritesPage = () => {

    const blogItems = useSelector(state => state.favorite.items);

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
                                    <Card.Link className='btn btn-success'
                                    >remove</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default FavoritesPage;