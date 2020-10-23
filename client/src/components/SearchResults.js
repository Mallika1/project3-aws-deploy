import React from 'react'
import Button from 'react-bootstrap/Button'

class SearchResult extends React.Component {

   render() {
      console.log("This is Search Result " ,this.props)
      return (
         <tr >
            <td>
               <span class="custom-checkbox">
                  <input type="checkbox" id="checkbox1" name="options[]"
                     value="1" />
                  <label for="checkbox1"></label>
               </span>
            </td>
            <td class="col-xs-2">{this.props.dataSubjectArea}</td>
            <td class="col-xs-2">{this.props.dataConcept}</td>
            <td class="col-xs-2">{this.props.dataElement}</td>
            <td class="col-xs-1">{this.props.dqRuleType}</td>
            <td class="col-xs-1">{this.props.dqPattern}</td>
            <td class="col-xs-1">{this.props.RuleDefinition}</td>
            <a href="" class="edit" data-toggle="modal"  edit={this.props.isClicked}>
            <i class="fas fa-file-code"           data-toggle="tooltip" title="View SQL Code"></i></a>
            {/* <td class="col-xs-1">{this.props.sqlCode}</td> */}
            <td>
               {/* <Button variant="primary" size="sm" id={this.props.businessId} onClick={this.props.onClick} disabled={this.props.isClicked}> Edit</Button>
           <Button variant="primary" size="sm" id={this.props.businessId} onClick={this.props.onClick} disabled={this.props.isClicked}> Del</Button> */}

           <Button variant="info" size="sm" id={this.props.id} onClick={this.props.onClick} edit={this.props.isClicked} > <i class="fas fa-edit" data-toggle="tooltip"
                     title="Edit"></i></Button>
           <Button variant="danger" size="sm" id={this.props.id} onClick={this.props.onClick} delete={this.props.isClicked}> <i class="fas fa-trash-alt" data-toggle="tooltip"
                     title="Delete"></i></Button>

               {/* <a href="#editDQRuleModal" class="edit" data-toggle="modal" id={this.props.id} onClick={this.props.onClick} edit={this.props.isClicked}>
                  <i class="fas fa-edit" data-toggle="tooltip"
                     title="Edit"></i></a>
               <a href="#deleteDQRuleModal" class="delete" data-toggle="modal" id={this.props.id} onClick={this.props.onClick}>

                  <i class="fas fa-trash-alt" data-toggle="tooltip"
                     title="Delete"></i></a> */}

            </td>



         </tr>

      )
   }
}
export default SearchResult;

