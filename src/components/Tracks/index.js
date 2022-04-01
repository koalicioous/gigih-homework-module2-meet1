import Container from "../Container";
import Track from "../Track";
import songs from '../../content/tracks';
import { useSearchResult } from "../../context/useSearchResult";

const Tracks = () => {
    const { result, selectedSongs } = useSearchResult()

    return (
        <section className="py-8 bg-gradient-to-b from-gray-700 to-gray-800 flex-grow">
            <Container>
                {
                    selectedSongs.length > 0 &&
                    <div className="mb-4 border-b border-white pb-4">
                        <h1 className="text-white text-left">Selected Songs</h1>
                        {selectedSongs.map((song,idx) => {
                            return (
                                <Track
                                    key={song.uri}
                                    number={idx}
                                    title={song.name}
                                    artist={song.artists[0].name}
                                    album={song.album.name}
                                    uri={song.uri}
                                />
                            )
                        })}
                    </div>
                }
                {result.length === 0 && songs.map(
                    (song,idx) => (
                        <Track
                            key={idx}
                            number={idx}
                            title={song.name}
                            artist={song.artists[0].name}
                            album={song.album.name}
                            uri={song.uri}
                            song={song}
                        />
                    )
                )}
                {
                    result.length > 0 && result.map(
                        (song,idx) => (
                            <Track
                                key={idx}
                                number={idx}
                                title={song.name}
                                artist={song.artists[0].name}
                                album={song.album.name}
                                uri={song.uri}
                                song={song}
                            />
                        )
                    )
                }
            </Container>
        </section>
    )
}

export default Tracks;