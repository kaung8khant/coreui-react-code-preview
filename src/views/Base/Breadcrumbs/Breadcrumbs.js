import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button
} from "reactstrap";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);
class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = { code: false };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Col md="2" xl="2" style={{ marginBottom: "20px" }}>
          <Button
            block
            outline
            color="light"
            onClick={() => this.setState({ code: !this.state.code })}
          >
            {this.state.code ? "Close" : "</> Code"}
          </Button>
        </Col>
        {this.state.code && (
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        )}
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/breadcrumbs/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Library
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Data
                  </BreadcrumbItem>
                  <BreadcrumbItem active tag="span">
                    Bootstrap
                  </BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const codeString = `import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap";
class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/breadcrumbs/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Breadcrumb>
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Library
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    Data
                  </BreadcrumbItem>
                  <BreadcrumbItem active tag="span">
                    Bootstrap
                  </BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Breadcrumbs;
`;

export default Breadcrumbs;
