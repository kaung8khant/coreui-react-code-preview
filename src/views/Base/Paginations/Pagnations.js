import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Col,
  Button
} from "reactstrap";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);
class Paginations extends Component {
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
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <div className="card-header-actions">
              <a
                href="https://reactstrap.github.io/components/pagination/"
                rel="noreferrer noopener"
                target="_blank"
                className="card-header-action"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <small> disabled and active states</small>
          </CardHeader>
          <CardBody>
            <Pagination>
              <PaginationItem disabled>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <small> sizing</small>
          </CardHeader>
          <CardBody>
            <Pagination size="lg">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className="d-none d-sm-block">
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination size="sm">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
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
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

class Paginations extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <div className="card-header-actions">
              <a
                href="https://reactstrap.github.io/components/pagination/"
                rel="noreferrer noopener"
                target="_blank"
                className="card-header-action"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <small> disabled and active states</small>
          </CardHeader>
          <CardBody>
            <Pagination>
              <PaginationItem disabled>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Pagination</strong>
            <small> sizing</small>
          </CardHeader>
          <CardBody>
            <Pagination size="lg">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className="d-none d-sm-block">
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination size="sm">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Paginations;
`;
export default Paginations;
