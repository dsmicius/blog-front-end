import { Form, InputGroup } from 'react-bootstrap';

const FormikFieldInputGroup = ({
                                   field,
                                   form,
                                   labelText,
                                   type
                               }) => {
    const isValid = !form.errors[field.name];
    const isInvalid = form.touched[field.name] && !isValid;
    return (
        <Form.Group controlId={field.name}>
            <Form.Label>{labelText}</Form.Label>
            <InputGroup>
                <Form.Control
                    type={type}
                    name={field.name}
                    isValid={form.touched[field.name] && isValid}
                    isInvalid={isInvalid}
                    feedback={form.errors[field.name]}
                    onChange={field.onChange}
                />
                <Form.Control.Feedback type="invalid">
                    {form.errors[field.name]}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    );
}

export default FormikFieldInputGroup;
