import Container from "../Container";
import Track from "../Track";

const songs = [
    {
        title: 'Tujuh Belas',
        artist: 'Tulus',
    },
    {
        title: 'Kelana',
        artist: 'Tulus',
    },
    {
        title: 'Remedi',
        artist: 'Tulus',
    },
    {
        title: 'Interaksi',
        artist: 'Tulus',
    },
    {
        title: 'Ingkar',
        artist: 'Tulus',
    },
    {
        title: 'Jatuh Suka',
        artist: 'Tulus',
    },
]
const Tracks = () => {
    return (
        <section className="py-8 bg-gradient-to-b from-gray-700 to-gray-800 flex-grow">
            <Container>
                {songs.map((song,idx) => <Track number={idx} title={song.title} artist={song.artist} />)}
            </Container>
        </section>
    )
}

export default Tracks;