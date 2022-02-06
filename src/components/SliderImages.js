import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel variant="dark">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg"
                    alt="First slide"
                    style={{margin: "auto"}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg"
                    alt="Second slide"
                    style={{margin: "auto"}}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg"
                    alt="Third slide"
                    style={{margin: "auto"}}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
