import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  Row,
  Spinner
} from "reactstrap";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);
class SpinnersB4 extends Component {
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
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Spinner border
                <div className="card-header-actions">
                  <a
                    href="https://getbootstrap.com/docs/4.2/components/spinners/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="success" />
                <Spinner color="danger" />
                <Spinner color="warning" />
                <Spinner color="info" />
                <Spinner color="light" />
                <Spinner color="dark" />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner grow</CardHeader>
              <CardBody>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="dark" />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner size</CardHeader>
              <CardBody>
                <Spinner size="sm" />
                <Spinner size="sm" type="grow" />
                <Spinner style={{ width: "3rem", height: "3rem" }} />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner buttons</CardHeader>
              <CardBody>
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" />
                  <span className="sr-only">Loading...</span>
                </Button>
                <Button color="primary" className="mr-1 mb-1">
                  <Spinner size="sm" className="mr-1" />
                  Loading...
                </Button>
                <br />
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" type="grow" />
                  <span className="sr-only">Loading...</span>
                </Button>
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" className="mr-1" type="grow" />
                  Loading...
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const codeString = `
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  Row,
  Spinner
} from "reactstrap";

class SpinnersB4 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Spinner border
                <div className="card-header-actions">
                  <a
                    href="https://getbootstrap.com/docs/4.2/components/spinners/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Spinner color="primary" />
                <Spinner color="secondary" />
                <Spinner color="success" />
                <Spinner color="danger" />
                <Spinner color="warning" />
                <Spinner color="info" />
                <Spinner color="light" />
                <Spinner color="dark" />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner grow</CardHeader>
              <CardBody>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="dark" />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner size</CardHeader>
              <CardBody>
                <Spinner size="sm" />
                <Spinner size="sm" type="grow" />
                <Spinner style={{ width: "3rem", height: "3rem" }} />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Spinner buttons</CardHeader>
              <CardBody>
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" />
                  <span className="sr-only">Loading...</span>
                </Button>
                <Button color="primary" className="mr-1 mb-1">
                  <Spinner size="sm" className="mr-1" />
                  Loading...
                </Button>
                <br />
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" type="grow" />
                  <span className="sr-only">Loading...</span>
                </Button>
                <Button color="primary" disabled className="mr-1 mb-1">
                  <Spinner size="sm" className="mr-1" type="grow" />
                  Loading...
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SpinnersB4;

`;
export default SpinnersB4;
