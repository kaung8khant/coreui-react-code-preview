import React, { useState, useRef } from "react";
import DataTable from "components/DataTable/DataTable";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { NavLink } from "react-router-dom";

const CustomerTable = ({ data, count, setCount, page, setPage, total }) => {
  //const [data, setData] = useState(props.data);

  const [filter, setFilter] = useState(0);
  const tableEl = useRef(null);

  const handleIconClick = () => {
    setFilter(!filter);
  };

  const formatID = (cell, row) => (
    <NavLink to={`/customer/edit/${row.id}`}>{cell}</NavLink>
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

  const url = "customer";

  const formatCustomer = data =>
    data.map(item => ({
      id: item.id,
      first_name: item.first_name,
      last_name: item.last_name,
      company: item.company ? item.company.name : "",
      phone: item.phone,
      email: item.email,
      nationality: item.country ? item.country.name : "",
      dob: item.dob,
      // todo: still dummy data
      transactions: Math.floor(Math.random() * 101)
    }));

  const handlePagePagination = currentPage => {
    setPage(currentPage);
  };
  const handleSizePerPagePagination = sizePerPage => {
    setCount(sizePerPage);
  };
  return (
    <React.Fragment>
      <DataTable
        pageTitle="People"
        url={url}
        refData={tableEl}
        totalCount={data.length}
        handleIconClick={handleIconClick}
        iconStyle={iconStyle}
        totalPerPage={count}
        handlePagePagination={handlePagePagination}
        handleSizePerPagePagination={handleSizePerPagePagination}
        showCreateButton={false}
        pageNo={page}
        renderTable={options => {
          return (
            <BootstrapTable
              data={formatCustomer(data)}
              size={"sm"}
              version="4"
              bordered={false}
              // striped
              // hover
              remote={true}
              fetchInfo={{
                dataTotalSize: total
              }}
              condensed
              pagination
              exportCSV
              search
              options={options}
              trClassName="rsrvtn-tbl-rw"
              keyField="id"
              ref={tableEl}
            >
              <TableHeaderColumn
                tdAttr={{ id: "id" }}
                dataField="id"
                id="id"
                dataSort
                {...filterProps}
                dataFormat={formatID}
              >
                ID
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "first_name" }}
                dataField="first_name"
                id="first_name"
                dataSort
                {...filterProps}
              >
                First Name
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "last_name" }}
                dataField="last_name"
                id="last_name"
                dataSort
                {...filterProps}
              >
                Last Name
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "company" }}
                dataField="company"
                id="company"
                dataSort
                {...filterProps}
              >
                Company
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
                tdAttr={{ id: "Email" }}
                dataField="email"
                id="Tooltip-email"
                dataSort
                {...filterProps}
              >
                Email
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "nationality" }}
                dataField="nationality"
                id="nationality"
                dataSort
                {...filterProps}
              >
                Nationality
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "dob" }}
                dataField="dob"
                id="dob"
                dataSort
                {...filterProps}
              >
                Date of Birth
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "transactions" }}
                dataField="transactions"
                id="transactions"
                dataSort
                {...filterProps}
              >
                Transactions
              </TableHeaderColumn>
            </BootstrapTable>
          );
        }}
      ></DataTable>
    </React.Fragment>
  );
};

export default CustomerTable;
