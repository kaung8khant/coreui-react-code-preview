import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { COMPANY_QUERY } from "../../query/company";
import CompanyForm from "./CompanyForm";

const CompanyEdit = props => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(COMPANY_QUERY, {
    variables: { id }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <CompanyForm data={data.company} editID={id} />;
};
export default CompanyEdit;
