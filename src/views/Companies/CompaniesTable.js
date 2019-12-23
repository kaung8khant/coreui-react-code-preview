import React, { useState, useEffect, useRef } from "react";
import DataTable from "components/DataTable/DataTable";
import { NavLink } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import _ from "lodash";

const CompaniesTable = props => {
  const [data, setData] = useState(props.data);
  const [todayDate, setDateValue] = useState(
    localStorage.getItem("companyFilterDate")
      ? localStorage.getItem("companyFilterDate")
      : moment().format("YYYY-MM-DD")
  );
  const [filter, setFilter] = useState(0);
  const tableEl = useRef(null);

  useEffect(() => {
    if (props.data) {
      let result = _.filter(props.data, function(data) {
        return moment(data.createdAt).format("YYYY-MM-DD") === todayDate;
      });
      setData(result);
    }
  }, [props.data, todayDate]);

  const handleIconClick = () => {
    setFilter(!filter);
  };
  const formatCompanyName = (cell, row) => (
    <NavLink to={`/company/edit/${row.id}`}>{cell}</NavLink>
  );
  const filterProps = {};
  if (filter) {
    filterProps.filter = { type: "TextFilter", placeholder: "Search..." };
  }
  const iconStyle = {
    position: "relative",
    display: "block",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginLeft: "18px",
    lineHeight: "1.25",
    color: "rgb(32, 168, 216)",
    backgroundColor: "rgb(52, 59, 65)",
    border: "1px solid rgb(35, 40, 44)",
    marginRight: "20px",
    height: "33px",
    marginTop: "1px",
    paddingTop: "4px",
    cursor: "pointer"
  };
  if (filter) {
    iconStyle.color = "#343b41";
    iconStyle.backgroundColor = "#20a8d8";
    iconStyle.borderColor = "#20a8d8";
  }

  const url = "company";

  return (
    <React.Fragment>
      <DataTable
        pageTitle="Companies"
        url={url}
        refData={tableEl}
        totalCount={data.length}
        handleIconClick={handleIconClick}
        iconStyle={iconStyle}
        renderTable={options => {
          return (
            <BootstrapTable
              data={data}
              size={"sm"}
              version="4"
              bordered={false}
              condensed
              pagination
              exportCSV
              search
              options={options}
              trClassName="rsrvtn-tbl-rw"
              keyField="id"
            >
              <TableHeaderColumn
                tdAttr={{ id: "name" }}
                dataField="name"
                id="name"
                dataSort
                {...filterProps}
                dataFormat={formatCompanyName}
              >
                Name
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "phone" }}
                dataField="phone"
                id="phone"
                dataSort
                {...filterProps}
              >
                Phone
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "email" }}
                dataField="email"
                id="email"
                dataSort
                {...filterProps}
              >
                Email
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "date_of_creation" }}
                dataField="date_of_creation"
                id="date_of_creation"
                dataSort
                {...filterProps}
              >
                Created
              </TableHeaderColumn>
            </BootstrapTable>
          );
        }}
      ></DataTable>
    </React.Fragment>
  );
};

export default CompaniesTable;
