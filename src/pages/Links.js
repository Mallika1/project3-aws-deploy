import React from 'react'
import '../darkley.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from '../components/common/MyCard'
import Card from 'react-bootstrap/Card'
import MyBreadcrumbs from '../components/common/MyBreadcrumbs'

function Links(){
    return(
    <Container>
          
          <MyBreadcrumbs link1="/" item1="Home" link2="/Link" item2="Links"/>
          <Row>
              <Col md="6">
            
                    <MyCard
                        heading = "Food Safety Program Overview"
                       para1 ="
                       The mission of the Food Safety Program is to protect the health of all foodservice customers. The internet offers an opportunity to share information which may assist you in being a well-informed foodservice consumer."
                       
                       para2 ="To view the most current food safety evaluations (of retail food facilities, please click on San Francisco or Mobile Vendor at left. This data includes evaluations of foodservice operations for restaurants, school cafeterias, caterers, mobile food units, child care centers, and nursing homes."
                       
                       para3 ="If you have searched the links to the right and can’t find what you are looking for then
                       
                   The foodservice facility may be located in a neighboring jurisdiction, like Fairfax County or Arlington County. For example, restaurants located on Little River Turnpike, Leesburg Pike, or Telegraph Road are in Fairfax County and not in the City of San Francisco."
                       
                  para4 = "The facility’s name may be slightly different than what you would expect. For example, a restaurant called “The Hotspot” might be listed under the letter “T” and not the letter “H”.
                       
                   Another way to search for a restaurant if you donot know its name but you know the street where it is located, you can enter the street name. For example, if you enter “King” for King Street, the website will list all restaurants with King in the name as well as all restaurants located on any street containing the name King."
                       
                    
                     />
              </Col>
              
              <Col md="6">
              <Card>
                      
                        <Card.Header>
                        <h5>Usefull Links </h5>
                        </Card.Header>
                        <Card.Body>
                            <ul>
                        <li>
                        For more information about the San Francisco Department of Health  Office of Environmental Health Services: <a href="https://www.sfdph.org/dph/eh/" target="_blank" rel="noopener noreferrer">OEHS</a>
                        </li>
                        <p></p>
                        <li>For Food Safety information &amp; Food Recalls: <a href="http://www.foodsafety.gov/" target="_blank" rel="noopener noreferrer">Home | FoodSafety.gov</a></li>
                        <p></p>
                        <li>CDC&#39;s Protect Yourself When Eating Out: <a href="http://www.cdc.gov/ncezid/dfwed/pdfs/protect-yourself-when-eating-out-508c.pdf" target="_blank" rel="noopener noreferrer">http://www.cdc.gov/ncezid/dfwed/pdfs/protect-yourself-when-eating-out-508c.pdf</a></li>
                        <p></p>
                        <li>USDA&#39;s Tips for Eating Healthy When Eating Out: <a href="http://www.choosemyplate.gov/healthy-eating-tips/tips-for-eating-out.html" target="_blank" rel="noopener noreferrer">Tips for Eating Healthy when Eating out</a></li>
                        </ul>
                        </Card.Body>
                </Card>    
              </Col>
        </Row>
    </Container>
    )
}
export default Links;