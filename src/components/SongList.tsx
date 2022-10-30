import { songs } from "../models/songs";
import SongRow from "./SongRow";

function SongList() {
    return (
        <div className="SongList">
            <ul>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Favorite</th>

                        </tr>
                    </thead>
                    <tbody>
                        {songs.map(song =>
                            <SongRow song={song} />
                        )
                        }
                    </tbody>
                </table>
            </ul>

        </div>
    );
}

export default SongList;
