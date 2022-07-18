import { Form } from 'react-bootstrap';

const FormLabelControl = ({
                              className,
                              name,
                              labelText,
                              placeholderText,
                              onChange,
                              isTextArea = false,
                              defaultValue

                          }) => {
    return (
        <Form.Group className={className} controlId={name}>
            <Form.Label>{labelText}</Form.Label>
            {isTextArea
                ? <Form.Control placeholder={placeholderText}
                                name={name}
                                as='textarea'
                                onChange={onChange}
                                defaultValue={defaultValue}
                />
                : <Form.Control placeholder={placeholderText}
                                name={name}
                                onChange={onChange}
                                defaultValue={defaultValue}
                />
            }
        </Form.Group>
    );
};

export default FormLabelControl;
