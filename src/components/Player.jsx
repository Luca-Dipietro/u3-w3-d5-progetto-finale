import { Container, Row, Col, ProgressBar, Nav, Card } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";

const Player = () => {
  const selectedSong = useSelector((state) => state.songs.selectedSong);
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100 ">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 justify-content-center align-items-center">
            {selectedSong && (
              <Col xs={2} className="d-flex align-items-center gap-3">
                {favourites.includes(selectedSong.id) ? (
                  <i
                    className="bi bi-heart-fill text-light"
                    onClick={() => dispatch(removeFromFavouritesAction(selectedSong.id))}
                  ></i>
                ) : (
                  <i
                    className="bi bi-heart text-light"
                    onClick={() => dispatch(addToFavouritesAction(selectedSong.id))}
                  ></i>
                )}
                <Card.Img variant="top" src={selectedSong.album.cover_xl} style={{ width: "65px", height: "65px" }} />
                <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                  <Card.Title className="text-white text-center" style={{ fontSize: "0.65rem" }}>
                    {selectedSong.title}
                  </Card.Title>
                  <Card.Text className="text-white text-center" style={{ fontSize: "0.65rem" }}>
                    {selectedSong.artist.name}
                  </Card.Text>
                </Card.Body>{" "}
              </Col>
            )}
            <Col xs={6} className="playerControls">
              <div className="d-flex align-items-center">
                <Nav.Link href="#">
                  <img src={shuffle} alt="shuffle" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src={prev} alt="prev" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src={play} alt="play" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src={next} alt="next" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src={repeat} alt="repeat" />
                </Nav.Link>
              </div>
              <ProgressBar className="mt-3" now={0} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
