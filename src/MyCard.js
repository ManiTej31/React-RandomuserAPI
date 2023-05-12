import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {  FaMapMarkedAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
         <CardTitle className="text-primary">
          <h1>
            <span style={{paddingRight:"10px"}}>{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
        <h4>Email: {details.email}</h4>
        <h4>Age : {details.dob?.age}</h4>
          <FaMapMarkedAlt />
          {details.location?.city}
          <p>{details.phone}</p>
          
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
  