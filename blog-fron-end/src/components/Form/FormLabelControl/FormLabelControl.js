import { Form } from 'react-bootstrap';

const FormLabelControl = ({
                              className,
                              name,
                              labelText,
                              placeholderText,
                              onChange,
                              isTextArea = false,
                          }) => {
    return (
        <Form.Group className={className} controlId={name}>
            <Form.Label>{labelText}</Form.Label>
            {isTextArea
                ? <Form.Control placeholder={placeholderText}
                                name={name}
                                as="textarea"
                                onChange={onChange} />
                : <Form.Control placeholder={placeholderText}
                                name={name}
                                onChange={onChange} />
            }
        </Form.Group>
    )
}

export default FormLabelControl;
