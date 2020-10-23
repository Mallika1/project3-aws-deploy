import React from "react";
import SearchResults from '../components/SearchResults'
import TableComponent from '../components/TableComponent'
import InputGroupsSearchForm from '../components/common/InputGroupsSearchForm'
import '../darkley.css'
// import '../style.css'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MyCollapse from '../components/MyCollapse'
import MyFavComponent from '../components/MyFavComponent'
import API from "../utils/API";

import MyBreadcrumbs from '../components/common/MyBreadcrumbs'


class UserPage extends React.Component {
 
        constructor(props) {
        super(props);
   
        this.onSelect = this.onSelect.bind(this);
        this.state = {
          name:'',
          address:'',
          zip:'',
          risk:'',
          result:[],
          myfavdata:[],
          isClicked:false
        };
      }
     
      componentDidMount() {
        this.refreshMyFav()
      }

      refreshMyFav () {
       
      
        let userId = localStorage.getItem("USER_ID")
        API.myfav(userId)
        .then(res => {
          this.setState({ myfavdata:  [res.data]})
       
        })
        .catch(err => console.log(err));
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
      onChange = key => e => this.setState({ [key]: e.target.value });
     
      validation = () => {
   
        if (this.state.name=== "" && this.state.address==="" && this.state.zip==="" && this.state.risk==="" ) {
          return false;
        }
        return true;
      };
    
      handleClick = e => {
        e.preventDefault();
        // this.setState({ myfavdata: []})
       
        let businessId = e.target.id
        let userId = localStorage.getItem("USER_ID")
         
        let params ={
          businessId : businessId,
          userId : userId
        }
      
        API.addtofav(params)
        .then(res => {
          // console.log("showfav" + JSON.stringify(res.data))
          // let tempRows = [...this.state.myfavdata];
          // tempRows.push(res.data)
          // this.setState({myfavdata:tempRows})
         
          this.setState({ myfavdata:  [...this.state.myfavdata,res.data]
                          })
          // this.setState({ myfavdata:  res.data})
          console.log("myfavdata" + JSON.stringify(this.state.myfavdata))
        })
        .catch(err => console.log(err));
      }

      handleDelete = e => {
        e.preventDefault();
       
        let businessId = e.target.id
        let userId = localStorage.getItem("USER_ID")
        let params ={
          businessId : businessId,
          userId : userId
        }
         API.deleteFav(params)
        //  alert( businessId)
        //  alert( userId)
         .then(res => {
          this.setState({ myfavdata: [res.data]})
        
          // this.state.myfavdata.map(r1 =>r1.filter(businessId ))
         
          // this.setState({ myfavdata: [...this.state.myfavdata] })
         })
         .catch(err => console.log(err));
       }
     
    render(){
      
      const resultComponents = this.state.result.map(r => 
                
        <SearchResults 
        key={r.business_id}
        businessId={r.business_id}
        businessName = {r.business_name}
        businessAddress={r.business_address}
        zip={r.business_postal_code}
        riskCategory = {r.risk_category} 
        violationDescription={r.violation_description} 
        isClicked={this.state.isClicked}
        onClick={this.handleClick}
        tableName="search"
       
      />
      )
      // const showfavComponents = this.state.myfavdata.map(r1 =>r1.map(r=> 
      //   <SearchResults 
      //   key={r.business_id}
      //   businessId={r.business_id}
      //   businessName = {r.business_name}
      //   // businessName = {r.business_name}
      //   businessAddress={r.business_address}
      //   zip={r.business_postal_code}
      //   riskCategory = {r.risk_category} 
      //   violationDescription={r.violation_description} 

      //   onClick={this.handleDelete}
      //   tableName="showfav"
      // />
      //     )
      // )
      const showfavComponents = this.state.myfavdata.map(r1 =>r1.map(r=>
                
        <SearchResults 
        key={r.business_id}
        businessId={r.business_id}
        businessName = {r.Restdatum.business_name}
        // businessName = {r.business_name}
        businessAddress={r.Restdatum.business_address}
        zip={r.Restdatum.business_postal_code}
        riskCategory = {r.Restdatum.risk_category} 
        violationDescription={r.Restdatum.violation_description} 
       
         isClicked={this.state.isClicked} 
        
        onClick={this.handleDelete}
        tableName="showfav"
      />
    )
      )
    
        console.log("showfavComponents" + showfavComponents.length);
      return (
    
          <Container  >
            <MyBreadcrumbs link1="/" item1="Home" link2="/UserPage" item2="MyPage"/>
            <Row>
                <Col md={4} >
                  <Card>
                    <Card.Body>
                      <Card.Title>Welcome {localStorage.getItem("fullName")}!</Card.Title>       
                      <InputGroupsSearchForm onChange={this.onChange} onClick={this.onSubmit}/>
                      <MyCollapse label="Refine your search" risk={this.state.risk} onSelect={this.onSelect} onChange={this.onChange} onClick={this.onSubmit}/>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={8}>
                  {/* My Fav */}
                  <Row >
                      <Col md={12}>
                      {/* <ShowMyFavTableComponent/> */}
                      <MyFavComponent showfavComponents={showfavComponents}></MyFavComponent>
                       {/* <TableComponent 
                              tabledata={showfavComponents}/>  */}
                    </Col>
                  </Row>
                  {/* Add to Fav */}
                  <Row className="mt-5">
                    <Col md={12} >
                      <Card>
                          <Card.Header>Showing Search Result
                          </Card.Header>
                          <Card.Body>
                              <TableComponent 
                              tabledata={resultComponents}/>
                          </Card.Body>
                      </Card>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </Container>
        )
      }
    }
export default UserPage

