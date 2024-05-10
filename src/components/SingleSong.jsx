import { Col } from "react-bootstrap";

const SingleSong = ({ data }) => {
  return (
    <Col className="text-center">
      <img className="img-fluid" src={data.album.cover} alt="track" />
      <p>
        Track: {data.title}
        <br />
        Artist: {data.artist.name}
      </p>
    </Col>
  );
};

export default SingleSong;
