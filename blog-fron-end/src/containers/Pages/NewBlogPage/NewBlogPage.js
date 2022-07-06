import {Button, Container, Form} from "react-bootstrap";
import FormLabelControl from "../../../components/FormLabelControl/FormLabelControl";
import {useState} from "react";


const NewBlogPage = () => {
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

        setVisible(true);
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
        <Container>
            <Form onSubmit={onSubmit}>
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
    )
}

export default NewBlogPage;