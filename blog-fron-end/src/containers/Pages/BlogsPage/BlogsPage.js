import {useEffect, useState} from "react";
import {getBlogsEndpoint} from "../../../api/apiEndpoints";
import {Card, Col, Container, Row} from "react-bootstrap";

const BlogsPage = () => {

    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        getBlogsEndpoint()
            .then(({data}) => {
                setBlogItems(data.blogs)
            })
            .catch((error) => console.log('error', error));

    }, []);


    return (
        <Container fluid>
            <h1 className={'text-center'}>Blog list</h1>
            <Row xs={1} md={2} className='g-4'>
                {
                    blogItems.map(blog => (
                        <Col key={blog.blogId}>
                            <Card>
                                <Card.Header>
                                    <div className='d-flex justify-content-around'>
                                        <div>{blog.subject}</div>
                                        <div>Author: {blog.author}</div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                       <Card.Text>{blog.description}</Card.Text>
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