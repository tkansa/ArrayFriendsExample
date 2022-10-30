import { Link } from "react-router-dom";
import { Song } from "../models/Song";

interface Props {
    song: Song;
}
///song-list/:id

function SongRow({song}: Props) {

  return (
    // <div className="SongRow">
      <tr>
          <td><Link to={`/song-list/${song.id}`}>{song.title}</Link></td>
          <td>{song.artist}</td>
          <td>{song.favorite && <p>&#9829;</p>}</td>
      </tr>
     
    // </div>
  );
}

export default SongRow;
