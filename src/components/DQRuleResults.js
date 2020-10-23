import React from 'react'
import Button from 'react-bootstrap/Button'

class DQRuleResult extends React.Component {

   render() {
      return (
         <tr >
            <td>
               <span class="custom-checkbox">
                  <input type="checkbox" id="checkbox1" name="options[]"
                     value="1" />
                  <label for="checkbox1"></label>
               </span>
            </td>
            <td >{this.props.businessName}</td>
            <td>{this.props.businessAddress}</td>
            <td >{this.props.zip}</td>
            <td>{this.props.riskCategory}</td>
            <td>
               {/* <Button variant="primary" size="sm" id={this.props.businessId} onClick={this.props.onClick} disabled={this.props.isClicked}> Edit</Button>
           <Button variant="primary" size="sm" id={this.props.businessId} onClick={this.props.onClick} disabled={this.props.isClicked}> Del</Button> */}

               <a href="#editDQRuleModal" class="edit" data-toggle="modal" id={this.props.businessId} onClick={this.props.onClick} >
                  <i class="fas fa-edit" data-toggle="tooltip"
                     title="Edit"></i></a>
               <a href="#deleteDQRuleModal" class="delete" data-toggle="modal" id={this.props.businessId} onClick={this.props.onClick}>

                  <i class="fas fa-trash-alt" data-toggle="tooltip"
                     title="Delete"></i></a>

            </td>



         </tr>

      )
   }
}
export default DQRuleResult;

