import Container from "../Container";

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
                {songs.map((song,idx) => {
                    return (
                        <div className="grid grid-cols-[50px_1fr_80px] gap-4 text-white mb-3">
                            <div className="flex items-center justify-center">
                                {idx+1}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold">{song.title}</h3>
                                <p className="text-gray-300">{song.artist}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="transition-all py-2 px-5 text-sm border border-gray-600 hover:border-gray-400 rounded-full">
                                    Select
                                </button>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </section>
    )
}

export default Tracks;