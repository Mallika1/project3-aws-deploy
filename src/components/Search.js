import React from 'react'
import Card from 'react-bootstrap/Card'
import API from "../utils/API";
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroupsSearchForm from './common/InputGroupsSearchForm';
import MyCollapse from '../components/MyCollapse'
import {Link} from 'react-router-dom'


class Search extends React.Component{

  constructor(props) {
    super(props);
   
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      name:'',
      address:'',
      zip:'',
      risk:'',
      result:[],
     
    };
  }
 
  onSelect(e) {

      this.setState({ risk:  e.target.innerText });
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({ result: [] })
    if (this.validation()) {
    API.search(this.state)
      .then(res => {
        this.setState({ result: res.data })
     
      })
      .catch(err => console.log(err));
    }
  };
  
  validation = () => {
   
    if (this.state.name=== "" && this.state.address==="" && this.state.zip==="" && this.state.risk==="" ) {
      return false;
    }
    return true;
  };

  onChange = key => e => this.setState({ [key]: e.target.value });
 
    render(){

      return(
        
        <Card>
              <Card.Header>
                    <h5>Search Establishments</h5>
              </Card.Header>
              <Card.Body>
              
              <InputGroupsSearchForm onChange={this.onChange} onClick={this.onSubmit}/>
              <MyCollapse label="Refine your search" risk={this.state.risk} onSelect={this.onSelect} onChange={this.onChange} onClick={this.onSubmit}/>
              
              {this.state.result.length>0 &&
                <ListGroup.Item>search returned {this.state.result.length} establishments</ListGroup.Item>
                }
                
              {this.state.result.map(r =>
                 
                              <ListGroup>
                            
                                <ListGroup.Item><Link to={`/facility/${r.business_id}`}>
                                    <h5>{r.business_name} </h5>
                                    <p style={{color:'grey'}}>{r.business_address}
                                    <p>Risk : {r.risk_category}</p> </p>
                                    </Link>
                                    </ListGroup.Item>
                                
                              </ListGroup>
                          
                          )}
              </Card.Body>
            </Card>
 
    )
}
}
export default Search;

