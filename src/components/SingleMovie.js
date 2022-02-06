import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import { useParams } from "react-router-dom";


function SingleMovie() {
    const {movid} = useParams();
    return (
        <div>
            <Container fluid style={{padding:"8%", background:"lightblue"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) => {
                        if(mov.id==movid) {
                            return (
                                <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                    <Card>
                                        <Card.Img variant="top" src={mov.image} />
                                        <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>{mov.actor}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovie;