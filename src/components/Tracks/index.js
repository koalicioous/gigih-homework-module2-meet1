import Container from "../Container";
import Track from "../Track";
import songs from '../../content/tracks';

const Tracks = () => {
    return (
        <section className="py-8 bg-gradient-to-b from-gray-700 to-gray-800 flex-grow">
            <Container>
                {songs.map(
                    (song,idx) => (
                        <Track
                            number={idx}
                            title={song.name}
                            artist={song.artists[0].name}
                            album={song.album.name}
                        />
                    )
                )}
            </Container>
        </section>
    )
}

export default Tracks;