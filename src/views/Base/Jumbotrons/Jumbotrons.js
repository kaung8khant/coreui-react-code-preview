import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Jumbotron,
  Row
} from "reactstrap";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

class Jumbotrons extends Component {
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
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Jumbotron</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/jumbotron/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Jumbotron</strong>
                <small> fluid</small>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">
                      This is a modified jumbotron that occupies the entire
                      horizontal space of its parent.
                    </p>
                  </Container>
                </Jumbotron>
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
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Jumbotron,
  Row
} from "reactstrap";

class Jumbotrons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Jumbotron</strong>
                <div className="card-header-actions">
                  <a
                    href="https://reactstrap.github.io/components/jumbotron/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <hr className="my-2" />
                  <p>
                    It uses utility classes for typgraphy and spacing to space
                    content out within the larger container.
                  </p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Jumbotron</strong>
                <small> fluid</small>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">
                      This is a modified jumbotron that occupies the entire
                      horizontal space of its parent.
                    </p>
                  </Container>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;

`;
export default Jumbotrons;
