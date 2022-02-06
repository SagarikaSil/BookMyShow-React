import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
      <div style={{background:"rgb(49, 48, 53)", color:"white"}}>
          <Container>
                <Row style={{padding:"2%"}}>
                    <Col xs={2}>
                        Col 1
                    </Col>
                    <Col xs={4}>
                        Col 2
                    </Col>
                    <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}>
                        <Button className="btn-danger">Contact Today!</Button>
                    </Col>
                </Row>
                <Row style={{textAlign:"center", padding:"2%"}}>
                    <Col>
                        Col 1
                    </Col>
                    <Col>
                        Col 2
                    </Col>
                    <Col>
                        Col 3
                    </Col>
                </Row>
          </Container>
      </div>
    );
  }
  
  export default Footer;