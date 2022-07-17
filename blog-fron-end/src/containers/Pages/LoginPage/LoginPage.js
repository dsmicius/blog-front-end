import { Field, Form, Formik } from 'formik';
import {
    Button,
    Container, Spinner,
} from 'react-bootstrap';
import FormikFieldInputGroup from '../../../components/Formik/FormikFieldInputGroup/FormikFieldInputGroup';
import * as Yup from 'yup';
import { loginEndpoint } from '../../../api/apiEndpoints';
import { useContext } from 'react';
import { AuthUserContext } from '../../../contexts/AuthUserContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../redux/User/userActions';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .min(5, 'Ilgis turi buti ne mazesnis nei 5')
        .required()
        //.email()
        .matches(/^(.+)@(.+)$/, 'email neatitinka standarto'),
    password: Yup.string()
        .min(3, 'Slaptazodzio ilgis turi buti >= 3')
        .required(),
});

const LoginPage = () => {

    // const { putAuthUser } = useContext(AuthUserContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postLogin = (login, helper) => {
        loginEndpoint({
            username: login.email,
            password: login.password,
        }).then(({ data }) => {
            // putAuthUser(data)
            dispatch(
                userLogin(data)
            )
            navigate("/")
        })
            .catch((error) => console.log(error))
            .finally(() => helper.setSubmitting(false))
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={postLogin}
            validationSchema={validationSchema}
        >
            {
                props =>
                    <Container>
                        <Form>
                            <Field name='email'
                                   labelText='Email:'
                                   type='text'
                                   component={FormikFieldInputGroup} />
                            <Field name='password'
                                   labelText='Password:'
                                   type='password'
                                   component={FormikFieldInputGroup} />

                            <div className='text-center'>
                                {props.isSubmitting
                                    ? <Button variant='primary' disabled>
                                        <Spinner
                                            as='span'
                                            animation='grow'
                                            size='sm'
                                            role='status'
                                            aria-hidden='true'
                                        />
                                        Processing...
                                    </Button>
                                    : <Button type='submit'
                                              variant='primary'>
                                        Submit
                                    </Button>
                                }
                            </div>
                        </Form>
                    </Container>
            }
        </Formik>
    );
};

export default LoginPage;
