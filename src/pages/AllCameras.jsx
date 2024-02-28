import WebcamComponent from "../Cameras/WebcamComponent";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AllCameras() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cameras</Heading>
      </Row>

      <Row>
        <WebcamComponent />
      </Row>
    </>
  );
}

export default AllCameras;
