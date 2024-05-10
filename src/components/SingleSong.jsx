import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { songSelectedAction } from "../redux/actions";

const SingleSong = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(songSelectedAction(data));
  };

  return (
    <Col className="text-center">
      <img className="img-fluid" src={data.album.cover_medium} alt="track" onClick={handleClick} />
      <p>
        Track: {data.title}
        <br />
        Artist: {data.artist.name}
      </p>
    </Col>
  );
};

export default SingleSong;
