import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import '../style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HorizontalSearchForm (props) {
  
    return (
     
         <Card.Header>
        <Form >
        <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={3}>
            Name
            </Form.Label>
            <Col sm={9}>
            <Form.Control type="text" placeholder="Restaurant Name" 
            name="name"
            autoComplete="off"
            onChange={props.onChange("name")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalAddress">
            <Form.Label column sm={3}>
            Street
            </Form.Label>
            <Col sm={9}>
            <Form.Control type="text" placeholder="Street Address" 
            name="address"
            autoComplete="off"
            onChange={props.onChange("address")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalZip">
            <Form.Label column sm={3}>
            Zip  
            </Form.Label>
            <Col sm={9}>
            <Form.Control type="text" placeholder="Postal Code" 
            name="zip"
            autoComplete="off"
            onChange={props.onChange("zip")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalCategory">
            <Form.Label column sm={3}>
            Risk 
            </Form.Label>
            <Col sm={9} className="d-flex justify-content-left">
          
            <DropdownButton id="dropdown-basic-button" title={props.risk===""? "Select Risk Category":props.risk }>
                    <Dropdown.Item  onClick={props.onSelect} ></Dropdown.Item>
                    <Dropdown.Item  onClick={props.onSelect} >Low Risk</Dropdown.Item>
                    <Dropdown.Item  onClick={props.onSelect}>Moderate</Dropdown.Item>
                    <Dropdown.Item  onClick={props.onSelect}>High Risk</Dropdown.Item>
                    </DropdownButton>
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Col sm={3}>
            <Button type="submit" onClick={props.onClick}>Search</Button>
            </Col>
        </Form.Group>
        </Form>
        </Card.Header>
    );
}

export default HorizontalSearchForm;


