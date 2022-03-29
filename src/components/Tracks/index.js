import Container from "../Container";
import Track from "../Track";
import songs from '../../content/tracks';
import { useSearchResult } from "../../context/useSearchResult";

const Tracks = () => {
    const { result } = useSearchResult()

    return (
        <section className="py-8 bg-gradient-to-b from-gray-700 to-gray-800 flex-grow">
            <Container>
                {result.length === 0 && songs.map(
                    (song,idx) => (
                        <Track
                            key={idx}
                            number={idx}
                            title={song.name}
                            artist={song.artists[0].name}
                            album={song.album.name}
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
                            />
                        )
                    )
                }
            </Container>
        </section>
    )
}

export default Tracks;