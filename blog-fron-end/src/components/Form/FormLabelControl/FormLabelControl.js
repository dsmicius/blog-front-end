import { Form } from 'react-bootstrap';

const FormLabelControl = ({
                              className,
                              name,
                              labelText,
                              placeholderText,
                              onChange,
                              isTextArea = false,
                              value,
                          }) => {
    return (
        <Form.Group className={className} controlId={name}>
            <Form.Label>{labelText}</Form.Label>
            {isTextArea
                ? <Form.Control placeholder={placeholderText}
                                name={name}
                                as='textarea'
                                onChange={onChange}
                                value={value} />
                : <Form.Control placeholder={placeholderText}
                                name={name}
                                onChange={onChange}
                                value={value}/>
            }
        </Form.Group>
    );
};

export default FormLabelControl;
