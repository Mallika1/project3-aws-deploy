import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

import SearchResults from '../components/SearchResults'
import TableComponent from '../components/TableComponent'
import InputGroupsSearchForm from '../components/common/InputGroupsSearchForm'
// import '../darkley.css'
// import '../style.css'


import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MyCollapse from '../components/MyCollapse'

import API from "../utils/API";

import MyBreadcrumbs from '../components/common/MyBreadcrumbs'


// function DQ_RA() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [showDel, setShowDel] = useState(false);

//   const handleDelClose = () => setShowDel(false);
//   const handleDelShow = () => setShowDel(true);




//   return (
//     <>

//     <Container  >
//             <MyBreadcrumbs link1="/" item1="Home" link2="/UserPage" item2="MyPage"/>
//             <Row>
//                 <Col md={4} >
//                   <Card>
//                     <Card.Body>
//                       <Card.Title>Welcome {localStorage.getItem("fullName")}!</Card.Title>       
//                       <InputGroupsSearchForm onChange={this.onChange} onClick={this.onSubmit}/>
//                       <MyCollapse label="Refine your search" risk={this.state.risk} onSelect={this.onSelect} onChange={this.onChange} onClick={this.onSubmit}/>
//                     </Card.Body>
//                   </Card>
//                 </Col>

//                 <Col md={8}>
//                   {/* My Fav */}
//                   <Row >
//                       <Col md={12}>
//                       {/* <ShowMyFavTableComponent/> */}
//                       <MyFavComponent showfavComponents={showfavComponents}></MyFavComponent>
//                        {/* <TableComponent 
//                               tabledata={showfavComponents}/>  */}
//                     </Col>
//                   </Row>
//                   {/* Add to Fav */}
//                   <Row className="mt-5">
//                     <Col md={12} >
//                       <Card>
//                           <Card.Header>Showing Search Result
//                           </Card.Header>
//                           <Card.Body>
//                               <TableComponent 
//                               tabledata={resultComponents}/>
//                           </Card.Body>
//                       </Card>
//                     </Col>
//                   </Row>
//               </Col>
//             </Row>
//           </Container>



//     <div>This is DQ RA page</div>
//       <Button variant="primary" onClick={handleShow}>
//         Add DQ Rule
//       </Button>

//       <Button variant="secondary" onClick={handleDelShow}>
//       Delete DQ Rule
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>DQ Rule Authoring</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//   <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>Data Element</Form.Label>
//     <Form.Control type="text" placeholder="Enter Data element" />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlSelect1">
//     <Form.Label>Data Subject Area</Form.Label>
//     <Form.Control as="select">
//       <option>Fund Performance</option>
//       <option>Fund Accounting</option>
//       <option>Transaction Position</option>
//       <option>Security</option>
//       <option>MarketData</option>
//     </Form.Control>
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlSelect2">
//     <Form.Label>Data Concept</Form.Label>
//     <Form.Control as="select" >
//       <option>Portfolio Return</option>
//       <option>Fund Asset</option>
//       <option>Portfolio Position</option>
//       <option>Portfolio Charecteristics</option>
//       <option>Issuer</option>
//     </Form.Control>
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlSelect3">
//     <Form.Label>DQ Rule Type </Form.Label>
//     <Form.Control as="select">
//       <option>Semantic</option>
//       <option>Syntactic</option>
//     </Form.Control>
//   </Form.Group>

//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>SQL Code</Form.Label>
//     <Form.Control as="textarea" placeholder="Enter SQL Code" rows="3" />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlInput2">
//     <Form.Label>Rule Definition </Form.Label>
//     <Form.Control type="text" placeholder="Enter Rule Definition" />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlInput2">
//     <Form.Label>Rule Exception Reason </Form.Label>
//     <Form.Control type="text" placeholder="Enter DQ rule exception reason " />
//   </Form.Group>


// </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//         </Modal>



// <Modal show ={showDel} onHide={handleDelClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete DQ Rule</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form> 
//         <h4>Warning!</h4>
//         <p>
//         Are you sure you want to delete these Records?
//         </p>
//         </Form> 
//       </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>




//     </>
//   );
// }

// export default DQ_RA;


class DQ_RA extends React.Component {

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelClose = this.handleDelClose.bind(this);
    this.handleDelShow = this.handleDelShow.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);

    this.state = {
      id: '',
      name: '',
      address: '',
      zip: '',
      risk: '',
      result: [],
      myDQDelData: [],
      isClicked: false,
      showDel: false,
      show: false,
      dbResult: [],
      dataElement: '',
      dataSubjectArea: '',
      dataConcept: '',
      dqRuleType: '',
      sqlCode: '',
      dqPattern: '',
      RuleDefinition: '',
      RuleException: '',
      delete: false,
      edit: false

    };
  }

  componentDidMount() {
    this.displayDQList(0)

  }

  displayDQList = (offset) => {
    this.setState({ dbResult: [] })
    API.DQRuleList(offset)
      .then(res => {
        this.setState({ dbResult: res.data })
        console.log(res.data);
        console.log("ll;l;" + this.state.dbResult);
      })
      .catch(err => console.log(err));
  };

  // displayRestaurantsList = (offset) => {
  //   this.setState({ dbResult: [] })
  //   API.restaurantlist(offset)
  //     .then(res => {
  //       this.setState({ dbResult: res.data })
  //       console.log(res.data);
  //       console.log("ll;l;" + this.state.dbResult);
  //     })
  //     .catch(err => console.log(err));
  // };

  handleRefresh() {
    this.displayDQList(0)
  }
  handleClose() {
    this.setState({ show: false })
  }
  handleShow() { this.setState({ show: true }) };

  handleDelClose() { this.setState({ showDel: false }) };
  handleDelShow() { this.setState({ showDel: true }) };

  // refreshMyFav() {


  //   let userId = localStorage.getItem("USER_ID")
  //   API.myfav(userId)
  //     .then(res => {
  //       this.setState({ myDQDelData: [res.data] })

  //     })
  //     .catch(err => console.log(err));
  // }

  onSelect(e) {

    this.setState({ risk: e.target.innerText });
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({ result: [] })
    //  alert(this.state.dataElement)
    console.log("calling submitRecord")
    API.submitRecord(this.state)
      .then(res => {
        // this.setState({ result: res.data })
        console.log(res)
      })
      .catch(err => console.log(err));
    console.log("after calling submitRecord")
    this.setState({ show: false })
  };
  onChange = key => e => this.setState({ [key]: e.target.value });

  validation = () => {

    if (this.state.name === "" && this.state.address === "" && this.state.zip === "" && this.state.risk === "") {
      return false;
    }
    return true;
  };

  // handleClick = e => {
  //   e.preventDefault();
  //   // this.setState({ myDQDelData: []})
  //   console.log("click--eeeeeeeeee" , e.target)
  //   let businessId = e.target.id
  //   alert(businessId)
  //   let userId = localStorage.getItem("USER_ID")

  //   let params = {
  //     businessId: businessId,
  //     userId: userId
  //   }

  //   // API.addtofav(params)
  //   //   .then(res => {
  //   //     // console.log("showfav" + JSON.stringify(res.data))
  //   //     // let tempRows = [...this.state.myDQDelData];
  //   //     // tempRows.push(res.data)
  //   //     // this.setState({myDQDelData:tempRows})

  //   //     this.setState({
  //   //       myDQDelData: [...this.state.myDQDelData, res.data]
  //   //     })
  //   //     // this.setState({ myDQDelData:  res.data})
  //   //     console.log("myDQDelData" + JSON.stringify(this.state.myDQDelData))
  //   //   })
  //   //   .catch(err => console.log(err));
  // }

  handleClick = e => {
    
    e.preventDefault();
    this.setState({ showDel: true })
    console.log("----eeeeeeeeeeeeeee", e.target)
    let id = e.target.id
    //  alert( id)
    let params = {
      id: id
    }
    API.deleteDQRuleData(params)
      //  add conditional execuition 
      .then(res => {
        this.setState({ myDQDelData: [res.data] })

        // this.state.myDQDelData.map(r1 =>r1.filter(businessId ))

        // this.setState({ myDQDelData: [...this.state.myDQDelData] })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("dbResult", this.state.dbResult)

    const resultComponents = this.state.dbResult.map(r =>

      <SearchResults
        key={r.id}
        id={r.id}
        businessId={r.business_id}
        businessName={r.business_name}
        businessAddress={r.business_address}
        zip={r.business_postal_code}
        riskCategory={r.risk_category}
        violationDescription={r.violation_description}
        dataElement={r.Data_Element}
        dataSubjectArea={r.Data_Subject_Area}
        dataConcept={r.Data_Concept}
        dqRuleType={r.DQ_Rule_Type}
        dqPattern={r.DQ_Rule_Pattern}
        sqlCode={r.SQL_Code}
        RuleDefinition={r.Rule_Definition}
        RuleException={r.Rule_Exception_Reason}


        isClicked={this.state.isClicked}
        onClick={this.handleClick}
        // onClickEdit={this.handleClick}
        // handleDelete = {this.handleDelete}
        tableName="search"

      />
    )

    console.log("This is  resultComponents", resultComponents);
    // const showfavComponents = this.state.myDQDelData.map(r1 => r1.map(r =>

    //   <SearchResults
    //     key={r.business_id}
    //     businessId={r.business_id}
    //     businessName={r.Restdatum.business_name}
    //     // businessName = {r.business_name}
    //     businessAddress={r.Restdatum.business_address}
    //     zip={r.Restdatum.business_postal_code}
    //     riskCategory={r.Restdatum.risk_category}
    //     violationDescription={r.Restdatum.violation_description}

    //     isClicked={this.state.isClicked}

    //     onClick={this.handleDelete}
    //     tableName="showfav"
    //   />
    // )
    // )


    return (

      <Container>
        {/* <MyBreadcrumbs link1="/" item1="Home" link2="/UserPage" item2="MyPage" /> */}
        <Row className="mt-5">
          {/* <Col md={4} >
            <Card>
              <Card.Body>
                <Card.Title>Welcome {localStorage.getItem("fullName")}!</Card.Title>
                <InputGroupsSearchForm onChange={this.onChange} onClick={this.onSubmit} />
                <MyCollapse label="Refine your search" risk={this.state.risk} onSelect={this.onSelect} onChange={this.onChange} onClick={this.onSubmit} />
              </Card.Body>
            </Card>
          </Col> */}

          <Col md={6} >
            <div>Manage Data Quality Rules</div> </Col>
          <Col md={3}>
            <Button variant="primary" onClick={this.handleShow}>
              Add DQ Rule
      </Button> </Col>
          <Col md={3}>
            <Button variant="secondary" onClick={this.handleDelShow}>
              Delete DQ Rule
      </Button>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>DQ Rule Authoring</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                  <Form.Label>Data Element</Form.Label>
                  <Form.Control type="requried" placeholder="Enter Data element"
                    name="dataElement"
                    autocomplete="off"
                    value={this.state.dataElement}
                    onChange={this.onChange("dataElement")}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                  <Form.Label>Data Subject Area</Form.Label>
                  <Form.Control as="select" placeholder="Select from options"
                    name="dataSubjectArea"
                    value={this.state.dataSubjectArea}
                    onChange={this.onChange("dataSubjectArea")}>
                    <option>Select From Options</option>
                    <option>Fund Performance</option>
                    <option>Fund Accounting</option>
                    <option>Transaction Position</option>
                    <option>Security</option>
                    <option>MarketData</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                  <Form.Label>Data Concept</Form.Label>
                  <Form.Control as="select" placeholder="Select from options"
                    name="dataConcept"
                    value={this.state.dataConcept}
                    onChange={this.onChange("dataConcept")}>
                    <option>Select From Options</option>
                    <option>Portfolio Return</option>
                    <option>Fund Asset</option>
                    <option>Portfolio Position</option>
                    <option>Portfolio Charecteristics</option>
                    <option>Issuer</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect3">
                  <Form.Label>DQ Rule Type </Form.Label>
                  <Form.Control as="select" placeholder="Select from options"
                    name="dqRuleType"
                    value={this.state.dqRuleType}
                    onChange={this.onChange("dqRuleType")}>
                    <option>Semantic</option>
                    <option>Syntactic</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlSelect3">
                  <Form.Label>DQ Rule Pattern </Form.Label>
                  <Form.Control as="select" placeholder="Select from options"
                    name="dqPattern"
                    value={this.state.dqPattern}
                    onChange={this.onChange("dqPattern")}>
                    <option>Select From Options</option>
                    <option>Variance Check</option>
                    <option>Standard Deviation Check</option>
                    <option>Referential Integrity Check</option>
                    <option>Null|Blank Check </option>

                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Rule Definition </Form.Label>
                <Form.Control type="text" placeholder="Enter Rule Definition"
                  name="RuleDefinition"
                  autocomplete="off"
                  value={this.state.RuleDefinition}
                  onChange={this.onChange("RuleDefinition")} />

              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>SQL Code</Form.Label>
                <Form.Control as="textarea" placeholder="Enter SQL Code" rows="2"
                  name="sqlCode"
                  autocomplete="off"
                  value={this.state.sqlCode}
                  onChange={this.onChange("sqlCode")} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Rule Exception Reason </Form.Label>
                <Form.Control type="text" placeholder="Enter DQ rule exception reason "
                  name="RuleException"
                  autocomplete="off"
                  value={this.state.RuleException}
                  onChange={this.onChange("RuleException")} />

              </Form.Group>


            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.onSubmit}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={this.state.showDel} onHide={this.handleDelClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete DQ Rule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h4>Warning!</h4>
              <p>
                Are you sure you want to delete these Records?
        </p>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleDelClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleDelClose}>
              Delete Record
          </Button>
          </Modal.Footer>
        </Modal>

        {/* My Fav */}

        {/* Add to Fav */}
        <Row className="mt-5">
          <Col md={12} >
            <Card>
              <Card.Header>Data Quality Rule Catalog
                  <a href="#editDQRuleModal" onClick={this.handleRefresh} >< span class="pull-right"><i class="fas fa-sync"></i></span></a>
              </Card.Header>
              <Card.Body>
                <TableComponent
                  tabledata={resultComponents} />
              </Card.Body>
            </Card>
          </Col>
        </Row>



      </Container>
    )
  }
}
export default DQ_RA
