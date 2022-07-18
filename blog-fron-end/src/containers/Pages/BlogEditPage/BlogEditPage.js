import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createBlogEndpoint, updateBlogEndpoint } from '../../../api/apiEndpoints';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FormLabelControl from '../../../components/Form/FormLabelControl/FormLabelControl';

const BlogEditPage = () => {

    const location = useLocation();
    const blogItem = { ...location.state.blogItem }
    const navigate = useNavigate();
    const authUser = useSelector(state => state.user)
    const { t } = useTranslation("blogForm");

    const [blog, setBlog] = useState({
        subject: '',
        description: '',
        userDto: {email: ''}
    });

    const handleChange = (e) => {
        console.log(e)
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
            userDto: {email: authUser.username}
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log("BlogIrasas",blog);
        updateBlogEndpoint(blog, {
            headers: {
                'Authorization': `Bearer ${authUser.jwtToken}`
            }
        })
            .then(r => console.log(r));
    };

    return (
        <Container>
            <Form
                onSubmit={onSubmit}
            >
                <FormLabelControl
                    className="mb-3"
                    onChange={handleChange}
                    placeholderText={t("placeHolders.subject")}
                    name="subject"
                    labelText={t("labels.subject")}
                    defaultValue={blogItem.subject}

                />

                <FormLabelControl
                    className="mb-3"
                    onChange={handleChange}
                    placeholderText={t("placeHolders.description")}
                    name="description"
                    labelText={t("labels.description")}
                    isTextArea
                    defaultValue={blogItem.description}

                />
                <Button variant='primary' type='submit'>
                    {t("common:buttons.submit")}
                </Button>
                <Button variant='primary' onClick={() => navigate(-1)}>Back</Button>
            </Form>
        </Container>
    )
}

export default BlogEditPage;