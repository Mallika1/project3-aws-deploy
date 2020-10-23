import React from 'react'
import Card from 'react-bootstrap/Card'


function MyCard(props){
 return(
            <Card >
                          <Card.Header>
                                <h5>{props.heading} </h5>
                          </Card.Header>
                          <Card.Body>
                          <Card.Text>
                                    {props.para1}
                            </Card.Text>
                            <Card.Text>
                                    {props.para2}
                            </Card.Text>
                            <Card.Text>
                                    {props.para3}
                            </Card.Text>
                            <Card.Text>
                                    {props.para4}
                            </Card.Text>
                          </Card.Body>
                    </Card>
 )
}
export default MyCard