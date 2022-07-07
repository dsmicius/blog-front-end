import {Button, Container, Form, Spinner} from "react-bootstrap";
import FormLabelControl from "../../../components/Form/FormLabelControl/FormLabelControl";
import {useContext, useState} from "react";
import * as Yup from 'yup';
import {Field, Formik} from "formik";
import FormikFieldInputGroup from "../../../components/Formik/FormikFieldInputGroup/FormikFieldInputGroup";
import {createBlogEndpoint} from "../../../api/apiEndpoints";
import {AuthUserContext} from "../../../contexts/AuthUserContext";

const NewBlogPage = () => {
    const [userDto, setUserDto] = useState({email: ''});

    const [blog, setBlog] = useState({
        subject: '',
        description: '',
        userDto: {email: ''}
    });

    const [visible, setVisible] = useState(false);

    const {authUser} = useContext(AuthUserContext)

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
            userDto: {email: authUser.username}
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(blog);
        createBlogEndpoint(blog, {
            headers: {
                'Authorization': `Bearer ${authUser.jwtToken}`
            }
        })
            .then(() => setVisible(true));
    };

    const showCreatedBlogInfo = () => {
        const {subject, description} = blog;
        return visible &&
            <>
                <hr/>
                <div>
                    Sukurtas Blog irasas:
                    <div><b>Subject:</b> {subject}</div>
                    <div><b>Description:</b> {description}</div>
                    <hr/>
                </div>
            </>;
    }

    const validationSchema = Yup.object().shape({
        subject: Yup.string()
            .min(3, 'Ilgis turi buti ne mazesnis nei 3')
            .required(),
        description: Yup.string()
            .min(3, 'Teksto ilgis turi buti ne mazenis nei 3')
            .required(),
    });

    return (
        <Container>
            <Form
                initialValues={{
                    subject: '',
                    description: '',
                }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <FormLabelControl
                    className="mb-3"
                    onChange={handleChange}
                    placeholderText="Write subject"
                    name="subject"
                    labelText="Blog subject"
                />

                <FormLabelControl
                    className="mb-3"
                    onChange={handleChange}
                    placeholderText="Write description"
                    name="description"
                    labelText="Blog description"
                    isTextArea
                />
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
            {showCreatedBlogInfo()}
        </Container>
    );
};

export default NewBlogPage;