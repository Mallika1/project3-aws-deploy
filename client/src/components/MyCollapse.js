import React from "react";
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import HorizontalForm from './common/HorizontalSearchForm'

class MyCollapse extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false,
      };
    }
  
    render() {
      const { open } = this.state;
      return (
        <div className="text-right">
          <Button variant="link" 
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {this.props.label}
            {/* {this.state.open &&<i class="fa fa-minus"></i>}
            {!this.state.open &&<i class="fa fa-plus"></i>} */}
          </Button>
            <Collapse in={this.state.open}>
              <div id="example-collapse-text">
              {this.props.label &&
              <HorizontalForm risk={this.props.risk} onSelect={this.props.onSelect} onChange={this.props.onChange} onClick={this.props.onClick}/>
              }
              </div>
            </Collapse>
           
        </div>
      );
    }
  }
  
export default MyCollapse