import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  InputGroup
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import { TextMask, InputAdapter } from "react-text-mask-hoc";
import {
  CREATE_COMPANY,
  UPDATE_COMPANY,
  GET_COMPANY
} from "../../query/company";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

const CompanyForm = ({ editID, data }) => {
  const [redirect, setRedirect] = useState(false);
  const [createCompany] = useMutation(CREATE_COMPANY, {
    refetchQueries() {
      return [{ query: GET_COMPANY }];
    },
    onCompleted(data) {
      setRedirect(true);
    }
  });

  const [updateCompany] = useMutation(UPDATE_COMPANY, {
    refetchQueries() {
      return [{ query: GET_COMPANY }];
    },
    onCompleted(data) {
      setRedirect(true);
    }
  });
  if (redirect) {
    return <Redirect to="/companies" />;
  }

  const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    values["infusionsoft_id"] = 0;
    if (editID) {
      updateCompany({ variables: { input: values } });
    } else {
      delete values.id;
      createCompany({ variables: { input: values } });
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        id: editID ? editID : "",
        name: data ? data.name : "",
        phone: data ? data.phone : "",
        email: data ? data.email : ""
      }}
      enableReinitialize
      render={({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        isValid,
        setFieldTouched,
        setFieldValue
      }) => {
        return (
          <div className="animated fadeIn">
            <Form
              onSubmit={handleSubmit}
              noValidate
              name="product__form"
              autoComplete="off"
            >
              <Row>
                <Col xs="12" sm="6">
                  <Card>
                    <CardBody style={{ marginTop: "20px" }}>
                      <FormGroup row>
                        <Col md="3">
                          <Label>Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={values.name}
                            placeholder="Company Name"
                            onChange={e =>
                              setFieldValue("name", e.target.value)
                            }
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col xl="3">
                            <Label for="phone">Phone Number</Label>
                          </Col>
                          <Col xs="12" xl="9">
                            <InputGroup>
                              <Field
                                name="phone"
                                id="phone"
                                render={({ field, ...props }) => {
                                  return (
                                    <TextMask
                                      guide={false}
                                      mask={[
                                        /[1-9]/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/
                                      ]}
                                      Component={InputAdapter}
                                      className="form-control"
                                      {...field}
                                      {...props}
                                      id="phone"
                                    />
                                  );
                                }}
                              />
                            </InputGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col md="3">
                            <Label>Email Address</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              defaultValue={values.email}
                              placeholder="Email Address"
                              onChange={e =>
                                setFieldValue("email", e.target.value)
                              }
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      <Row style={{ justifyContent: "center" }}>
                        <Button
                          color="success"
                          size="sm"
                          style={{ marginLeft: 5, marginRight: 5 }}
                        >
                          Save changes
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          style={{ marginLeft: 5, marginRight: 5 }}
                          onClick={() => setRedirect(true)}
                        >
                          Cancel
                        </Button>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Form>
          </div>
        );
      }}
    />
  );
};

export default CompanyForm;
