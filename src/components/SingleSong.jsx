const SingleSong = ({ data }) => {
  return (
    <div className="col text-center">
      <img className="img-fluid" src={data.album.cover} alt="track" />
      <p>
        Track: {data.title}
        <br />
        Artist: {data.artist.name}
      </p>
    </div>
  );
};

export default SingleSong;
