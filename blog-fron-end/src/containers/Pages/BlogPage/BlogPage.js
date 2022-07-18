import { useHistory, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import FormLabelControl from '../../../components/Form/FormLabelControl/FormLabelControl';

const BlogPage = () => {

    const location = useLocation();
    const {blogItem} = location.state
    const navigate = useNavigate();

    return (
        <Container>
            <Form>
                <FormLabelControl
                    className="mb-3"
                    name="subject"
                    labelText="subject"
                    placeholderText="Enter subject"
                    value={blogItem.subject}
                />

                <FormLabelControl
                    className="mb-3"
                    name="description"
                    value={blogItem.description}
                    isTextArea
                />
            </Form>
            <button onClick={() => navigate(-1)}>Back</button>
        </Container>
    );
};

export default BlogPage;