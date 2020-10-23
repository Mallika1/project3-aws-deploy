import React  from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function InputGroupsSearchForm(props) {
   
        return(
            <div>
                <InputGroup >
                    <Form.Control
                            placeholder="Enter 2 or more characters"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            name="name"
                            autoComplete="off"
                            type="text" onChange={props.onChange("name")}
                            />
                    <InputGroup.Append>
                            <Button variant="outline-secondary" size="xs"  onClick={props.onClick}><i className="fas fa-search"></i></Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
 
}
export default InputGroupsSearchForm;