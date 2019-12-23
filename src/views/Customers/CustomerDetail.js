import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "../../assets/css/custom.css";
import { GET_PEOPLE_BY_ID } from "../../query/customer";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  FormGroup,
  Label
} from "reactstrap";
import moment from "moment";

const CustomerDetail = props => {
  const id = props.id;
  const { loading, error, data } = useQuery(GET_PEOPLE_BY_ID, {
    variables: { id }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let people = data.peopleById;
  return (
    <Col>
      <Card>
        <CardHeader>People Detail</CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" xl="12">
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="passengerName"> Name </Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.name || "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="nationality">Nationality</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    -
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="companyName">Company Name</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.company ? people.company.name : "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="companyName">Department Name</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.deparment ? people.deparment.name : "_"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="phoneNumber">Phone Number</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.phone || "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="email">Email</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.email || "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="passport">ID Number</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.passport || "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="passportDate">ID Expiration</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.passport_exp
                      ? moment(people.passport_exp).format(
                          "MM-DD-YYYY hh:mm:ss a"
                        )
                      : "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="passportDate">Date of Birth</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    {people.dob
                      ? moment(people.dob).format("MM-DD-YYYY hh:mm:ss a")
                      : "-"}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xl="3">
                    <Label for="passportDate">Note</Label>
                  </Col>
                  <Col xs="12" xl="9">
                    asdf
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomerDetail;
