import React, { useState } from "react";
import { Card, CardHeader, CardBody, Col } from "reactstrap";
import "../../assets/css/custom.css";
import PeopleForm from "../../components/PeopleForm";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_PEOPLE, GET_PEOPLE } from "../../query/customer";

import { Redirect } from "react-router-dom";

const CreateCustomer = () => {
  const [redirect, setRedirect] = useState(false);
  const [createCustomer] = useMutation(CREATE_PEOPLE, {
    refetchQueries() {
      return [{ query: GET_PEOPLE }];
    },
    onCompleted(data) {
      setRedirect(true);
    }
  });
  const mutate = data => {
    delete data.id;
    createCustomer({ variables: { input: data } });
  };
  if (redirect) {
    return <Redirect to="/customer" />;
  }
  return (
    <Col>
      <Card>
        <CardHeader>Create People</CardHeader>
        <CardBody className="edit-people-div">
          <PeopleForm
            tabId={0}
            addPeople={people => mutate(people)}
            name="Passenger"
            value={null}
            cancel={() => setRedirect(true)}
            editIndex={-1} //represent customer array index,in this case -1 mean to call add func
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreateCustomer;
