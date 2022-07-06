import {Button, Container, Form, Spinner} from "react-bootstrap";
import FormLabelControl from "../../../components/FormLabelControl/FormLabelControl";
import {useState} from "react";
import * as Yup from 'yup';
import {Field, Formik} from "formik";
import FormikFieldInputGroup from "../../../components/FormikFieldInputGroup/FormikFieldInputGroup";

const validationSchema = Yup.object().shape({
    subject: Yup.string()
        .min(3, 'Ilgis turi buti ne mazesnis nei 3')
        .required(),
    description: Yup.string()
        .min(3, 'Teksto ilgis turi buti ne mazenis nei 3')
        .required(),
});

const NewBlogPage2 = () => {
    const [blog, setBlog] = useState({
        subject: '',
        description: ''
    });

    const [visible, setVisible] = useState(false);

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {

        e.preventDefault();
        console.log(blog);


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

    return (
        <Formik
            initialValues={{
                subject: '',
                description: '',
            }}
            onSubmit={onSubmit}

            validationSchema={validationSchema}
        >

                    <Container>
                        <Form>
                            <Field name='subject'
                                   labelText='Subject:'
                                   type='text'
                                   component={FormikFieldInputGroup} />
                            <Field name='description'
                                   labelText='Description:'
                                   type='text'
                                   component={FormikFieldInputGroup} />

                            <div className='text-center'>
                                    <Button type='submit'
                                              variant='primary'>
                                        Submit
                                    </Button>

                            </div>
                        </Form>
                        {showCreatedBlogInfo()}
                    </Container>

        </Formik>
    );
};

export default NewBlogPage2;