import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody, Tooltip, Input } from "reactstrap";
import {
  BootstrapTable,
  TableHeaderColumn,
  SearchField
} from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import details from "./_reservationDetails";
import "../../assets/css/custom.css";
import { Button } from "reactstrap";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      tableData: props.data,
      tooltipOpen: {
        assignedTo: false,
        dateOfBooking: false,
        pnr: false,
        passenger: false,
        Status: false
      },
      hoverId: 0
    };
    this.toggle = this.toggle.bind(this);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: false,
      paginationSize: 3,
      hidePageListOnlyOnePage: false,
      clearSearch: false,
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
      paginationPosition: "top",
      sizePerPageList: [
        {
          text: "10",
          value: 10
        },
        {
          text: "25",
          value: 25
        },
        {
          text: "50",
          value: 50
        },
        {
          text: "100",
          value: 100
        }
      ],
      toolBar: this.customToolBar,
      paginationPanel: this.renderPaginationPanel,
      sizePerPage: 10,
      searchPanel: this.renderCustomSearchPanel,
      exportCSVBtn: this.createCustomExportCSVButton,
      onRowMouseOver: this.onRowMouseOver
    };
    this.t = React.createRef();
  }
  handleCSVClick;
  createCustomExportCSVButton = onClick => {
    this.handleCSVClick = onClick;
    return (
      <i
        className="cui-cloud-download icons font-2xl d-block mt-4"
        onClick={onClick}
      ></i>
    );
  };
  customToolBar = props => {
    return (
      <React.Fragment>
        <div
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
          style={{ display: "flex" }}
        >
          <Button block color="primary" onClick={this.handleCreate}>
            Create
          </Button>
        </div>
        <div
          className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
          style={{ display: "flex" }}
        >
          <SearchField
            style={{ width: "inherit", height: "30px" }}
            className="my-custom-class"
            onKeyUp={e => this.searchTable(e.target.value)}
          />
        </div>
      </React.Fragment>
    );
  };
  renderPaginationPanel = props => {
    const iconStyle = {
      position: "relative",
      display: "block",
      paddingLeft: "14px",
      paddingRight: "8px",
      marginLeft: "0px",
      lineHeight: "1.25",
      color: "rgb(32, 168, 216)",
      backgroundColor: "rgb(52, 59, 65)",
      border: "1px solid rgb(35, 40, 44)",
      marginRight: "2px",
      height: "28px",
      marginTop: "1px",
      paddingTop: "4px",
      cursor: "pointer"
    };
    if (this.state.filter) {
      iconStyle.color = "#343b41";
      iconStyle.backgroundColor = "#20a8d8";
      iconStyle.borderColor = "#20a8d8";
    }

    return (
      <React.Fragment>
        <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3">
          {" "}
          {props.components.sizePerPageDropdown}
        </div>

        <div
          className="col-md-6 col-xs-6 col-sm-6 col-lg-6"
          style={{ display: "block" }}
        >
          {props.components.pageList}
        </div>
        <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3">
          <span onClick={this.handleCSVClick} style={iconStyle}>
            <i className="cui-cloud-download icons font-2xl d-block"></i>
          </span>
        </div>
      </React.Fragment>
    );
  };

  formatPNR = (cell, row) => {
    return <NavLink to={`/reservation/${row.id}`}>{cell}</NavLink>;
  };

  handleCreate = onClick => {
    this.props.history.push("/reservation/create");
  };

  searchTable = value => {
    if (value) {
      let x = data.rows.filter(dt => {
        return (
          dt.pnr == value ||
          (dt.assignedTo
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
            dt.passenger
              .toLocaleLowerCase()
              .includes(value.toLocaleLowerCase())) ||
          dt.status.includes(value) ||
          dt.dateOfBooking.includes(value)
        );
      });
      this.setState({ tableData: x });
    } else {
      this.setState({ tableData: data.rows });
    }
  };

  onRowMouseOver = props => {
    this.setState({ hoverId: props.id });
  };

  renderCustomSearchPanel = props => {
    return (
      <React.Fragment>
        <div style={{ display: "flex" }}>
          <SearchField
            style={{ width: "inherit", height: "30px" }}
            className="my-custom-class"
            onKeyUp={e => this.searchTable(e.target.value)}
          />
        </div>
      </React.Fragment>
    );
  };

  // just an example
  nameFormat(cell, row) {
    const id = `/reservation/12345`;
    return (
      <NavLink strict to={id}>
        {" "}
        {cell}{" "}
      </NavLink>
    );
  }
  toggle(field) {
    this.setState({
      tooltipOpen: {
        ...this.state.tooltipOpen,
        [field]: !this.state.tooltipOpen[field]
      }
    });
  }

  formatAssigned = (cell, row) => {
    return (
      <Input
        type="select"
        name="selectSm"
        id="SelectLm"
        bsSize="sm"
        defaultValue={cell}
        style={{ width: "70%" }}
      >
        <option value="">Please select</option>
        {this.state.tableData.map(d => (
          <option key={d.id} value={d.assignedTo}>
            {d.assignedTo}
          </option>
        ))}
      </Input>
    );
  };

  render() {
    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Reservations{" "}
          </CardHeader>
          <CardBody>
            <BootstrapTable
              data={this.state.tableData}
              size={"sm"}
              version="4"
              bordered={false}
              // striped
              hover
              condensed
              pagination
              search
              options={this.options}
              trClassName="rsrvtn-tbl-rw"
              exportCSV
            >
              <TableHeaderColumn
                tdAttr={{ id: "pnr" }}
                dataField="pnr"
                id="pnr"
                dataSort
                dataFormat={this.formatPNR}
              >
                PNR
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "Status" }}
                dataField="status"
                id="Tooltip-status"
                dataSort
              >
                Status
              </TableHeaderColumn>

              <TableHeaderColumn
                tdAttr={{ id: "assignedTo" }}
                isKey
                dataField="assignedTo"
                id="assignedTo"
                dataSort
                dataFormat={this.formatAssigned}
              >
                Assigned
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "dateOfBooking" }}
                dataField="dateOfBooking"
                id="dateOfBooking"
                dataSort
              >
                Date of Booking
              </TableHeaderColumn>
              <TableHeaderColumn
                tdAttr={{ id: "passenger" }}
                dataField="passenger"
                id="passenger"
                dataSort
              >
                Passenger
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
          {["Status", "assignedTo", "dateOfBooking", "pnr", "passenger"].map(
            d => (
              <Tooltip
                key={d}
                placement="right"
                isOpen={this.state.tooltipOpen[d]}
                target={d}
                toggle={() => this.toggle(d)}
                autohide={false}
              >
                {details}
              </Tooltip>
            )
          )}
        </Card>
      </div>
    );
  }
}

export default DataTable;
