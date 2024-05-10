import { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongAction } from "../redux/actions";
import SingleSong from "./SingleSong";

const MainSection = () => {
  const rockSongs = useSelector((state) => state.songs.rock);
  const popSongs = useSelector((state) => state.songs.pop);
  const hipHopSongs = useSelector((state) => state.songs.hipHop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongAction("queen", "rock"));
    dispatch(getSongAction("rhianna", "pop"));
    dispatch(getSongAction("pop smoke", "hipHop"));
  }, []);

  return (
    <Container fluid className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Nav.Link href="#">TRENDING</Nav.Link>
          <Nav.Link href="#">PODCAST</Nav.Link>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="imgLinks py-3">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" id="rockSection">
                {rockSongs &&
                  rockSongs.slice(0, 4).map((songData) => {
                    return <SingleSong key={songData.id} data={songData} />;
                  })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="imgLinks py-3">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" id="popSection">
                {popSongs &&
                  popSongs.slice(0, 4).map((songData) => {
                    return <SingleSong key={songData.id} data={songData} />;
                  })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="imgLinks py-3">
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" id="hipHopSection">
                {hipHopSongs &&
                  hipHopSongs.slice(0, 4).map((songData) => {
                    return <SingleSong key={songData.id} data={songData} />;
                  })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
