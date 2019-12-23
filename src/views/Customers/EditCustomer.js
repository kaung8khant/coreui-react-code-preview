import React, { useState } from "react";
import { Card, CardHeader, CardBody, Col } from "reactstrap";
import "../../assets/css/custom.css";
import PeopleFormikForm from "../../components/PeopleForm/PeopleFormikForm";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  UPDATE_PEOPLE,
  GET_PEOPLE,
  GET_PEOPLE_BY_ID
} from "../../query/customer";
import { formatPassengerFromGrpahql } from "../../components/PeopleForm/PeopleAction";
import { Redirect } from "react-router-dom";
import { toMySqlDate } from "utils/date";
import moment from "moment";

const formatData = (data, editIndex) => {
  let formattedData = {};
  formattedData["id"] = data.id ? data.id : null;
  formattedData["first_name"] = data.firstname;
  formattedData["last_name"] = data.lastname;
  formattedData["roles"] = data.roles
    ? data.roles.map(item => {
        return { id: item };
      })
    : null;
  formattedData["companyId"] = data.companyName;
  formattedData["email"] = data.email;
  formattedData["phone"] = data.phoneNumber
    ? data.phoneNumber.replace(/_/g, "")
    : null;
  formattedData["passport"] = data.passport;
  formattedData["passport_exp"] = data.pssDate
    ? toMySqlDate(data.pssDate)
    : null;
  formattedData["nrc"] = null;
  formattedData["nrc_exp"] = null;
  formattedData["dob"] = data.birthDate ? toMySqlDate(data.birthDate) : null;
  formattedData["countryId"] = data.nationality;
  formattedData["phonePrefix"] = data.phonePrefix;
  formattedData["title"] = data.title;
  formattedData["attachments"] = data.attachments
    ? data.attachments.length > 0
      ? data.attachments.map(item => {
          return { filename: item };
        })
      : []
    : [];
  formattedData["deletedAt"] = data.deletedAt || null;
  return formattedData;
};

const EditCustomer = props => {
  const [redirect, setRedirect] = useState(false);

  const [createCustomer] = useMutation(UPDATE_PEOPLE, {
    refetchQueries() {
      return [{ query: GET_PEOPLE }];
    },
    onCompleted(data) {
      setRedirect(true);
    }
  });

  const mutate = data => {
    createCustomer({ variables: { input: data } });
  };

  //get people by id
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_PEOPLE_BY_ID, {
    variables: { id }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let passenger = null;
  passenger = formatPassengerFromGrpahql(data.peopleById);

  if (redirect) {
    return <Redirect to="/customer" />;
  }
  return (
    <Col>
      <Card>
        <CardHeader>Edit People</CardHeader>
        <CardBody className="edit-people-div">
          <PeopleFormikForm
            onSubmit={(people, editIndex) => mutate(formatData(people))}
            value={passenger}
            editIndex={0}
            cancel={() => setRedirect}
            onDelete={() => {
              passenger["deletedAt"] = moment().format("YYYY-MM-DD HH:mm:ss");
              mutate(passenger);
            }}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditCustomer;
