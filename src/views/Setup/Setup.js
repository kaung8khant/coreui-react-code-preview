import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import Employees from "../Employees/Employees";
import Operator from "../Operator/Operator";
import ProductType from "../ProductType/ProductType";
import ProductStatus from "../ProductStatus/ProductStatus";
import Department from "../Department/Department";
import Currency from "../Currency/Currency";
import Vendor from "../Vendor/Vendor";
import PaymentMethod from "../Currency/PaymentMethod";
import TransactionType from "../Currency/TransactionType";

const Setup = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [handleForm, setHandleForm] = useState(-1);
  const [editId, setEditId] = useState(-1);

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setHandleForm(-1);
      setEditId(-1);
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardHeader>Setup</CardHeader>
            <CardBody>
              <Row className="reservation-details-container">
                <Col xl="4" sm={12}>
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem
                      onClick={() => toggle(-1)}
                      action
                      active={activeTab === -1}
                    >
                      Employees
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(-2)}
                      action
                      active={activeTab === -2}
                    >
                      Source of Reservation
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(0)}
                      action
                      active={activeTab === 0}
                    >
                      Operator
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(1)}
                      action
                      active={activeTab === 1}
                    >
                      Product Type
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(2)}
                      action
                      active={activeTab === 2}
                    >
                      Product Status
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(3)}
                      action
                      active={activeTab === 3}
                    >
                      Vendor
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(6)}
                      action
                      active={activeTab === 6}
                    >
                      Currency
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(7)}
                      action
                      active={activeTab === 7}
                    >
                      Payment Methods
                    </ListGroupItem>
                    <ListGroupItem
                      onClick={() => toggle(8)}
                      action
                      active={activeTab === 8}
                    >
                      Transaction Type
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xl="8" sm={12} className="mt-3 mt-xl-0">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={0} className="reservation-people-tab-div">
                      <Operator
                        tabId={0}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                      />
                    </TabPane>
                    <TabPane tabId={1} className="reservation-people-tab-div">
                      <ProductType
                        tabId={1}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                      />
                    </TabPane>
                    <TabPane tabId={2} className="reservation-people-tab-div">
                      <ProductStatus
                        tabId={2}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                      />
                    </TabPane>
                    <TabPane tabId={3} className="reservation-people-tab-div">
                      <Vendor
                        tabId={3}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                      />
                    </TabPane>
                    <TabPane tabId={-1} className="reservation-people-tab-div">
                      <Employees
                        tabId={-1}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                        type="setup"
                        editId={editId}
                        setEditId={setEditId}
                      />
                    </TabPane>
                    <TabPane tabId={-2} className="reservation-people-tab-div">
                      <Department
                        tabId={-2}
                        addNewSelect={false}
                        handleForm={handleForm}
                        setHandleForm={setHandleForm}
                      />
                    </TabPane>
                    <TabPane tabId={6}>
                      <Currency />
                    </TabPane>
                    <TabPane tabId={7}>
                      <PaymentMethod />
                    </TabPane>
                    <TabPane tabId={8}>
                      <TransactionType />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Setup;
