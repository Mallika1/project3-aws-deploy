import React from 'react'
import '../../darkley.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


function MyBreadcrumbs(props){

  return(
    <Breadcrumb style={{marginTop: 5,marginBottom:0, fontSize:".75rem"}}>
    <Breadcrumb.Item className="p-2" href={props.link1} >{props.item1}</Breadcrumb.Item>
    {props.link2 && 
    <Breadcrumb.Item className="p-2" href={props.link2} >{props.item2}</Breadcrumb.Item>
    }
     {props.link3 && 
    <Breadcrumb.Item className="p-2" href={props.link3} >{props.item3}</Breadcrumb.Item>
     }
    </Breadcrumb>
  )
}
export default MyBreadcrumbs;