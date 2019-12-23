import React from "react";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import "../../assets/css/custom.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMPANY } from "../../query/company";
import CompaniesTable from "./CompaniesTable";

const People = () => {
  const { loading, error, data } = useQuery(GET_COMPANY, {
    fetchPolicy: "network-only"
  });
  if (loading || error) return null;

  return (
    <div className="animated">
      <CompaniesTable data={data.companies} />
    </div>
  );
};

export default People;
