import React, { useState } from "react";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import "../../assets/css/custom.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_PEOPLE_WITH_PAGINATION } from "../../query/customer";
import CustomerTable from "./CustomerTable";

const People = () => {
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_PEOPLE_WITH_PAGINATION, {
    fetchPolicy: "network-only",
    variables: {
      count: count,
      page: page
    }
  });
  if (loading || error) return null;
  return (
    <div className="animated">
      <CustomerTable
        data={data.people.data}
        page={page}
        setPage={setPage}
        count={count}
        setCount={setCount}
        total={data.people.paginatorInfo.total}
      />
    </div>
  );
};

export default People;
