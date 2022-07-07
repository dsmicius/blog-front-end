import { useContext, useEffect, useState } from 'react';
import { deleteBlogEndpoint, getBlogsEndpoint } from '../../../api/apiEndpoints';
import { Button, Card, Col, Container, ListGroupItem, Row } from 'react-bootstrap';

import { AuthUserContext } from '../../../contexts/AuthUserContext';
import axios from 'axios';

const BlogsPage = () => {

    const { authUser } = useContext(AuthUserContext);

    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        getBlogsEndpoint()
            .then(({ data }) => {
                setBlogItems(data.blogs);
            })
            .catch((error) => console.log('error', error));

    }, []);

    const onDeleteClick = (blogId) => {
        console.log(`/${blogId}`);
        console.log('user', authUser.username);
        axios.post(`http://localhost:8888/api/blogs/${blogId}`,null,{
            headers: {
                'Authorization': `Bearer ${authUser.jwtToken}`,
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                host: "http://localhost:8888",
                port: 8888,
            }
        }).then((response) =>
        {
            response.headers.add('Access-Control-Allow-Origin', '*')
        })



        // deleteBlogEndpoint(`/${blogId}`, {
        //     headers: {
        //         'Authorization': `Bearer ${authUser.jwtToken}`,
        //     },
        //     proxy: {
        //         host: "http://localhost:8888",
        //         port: 8888,
        //     }
        // })
        //     .then(() =>
        //         console.log('blog deleted', blogId),
        //     )
        //     .catch((error) => console.log("ERROR:",error));
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