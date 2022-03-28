const Track = ({number,title,artist,album}) => {
    return (
        <div>
            <div className="grid grid-cols-[50px_1fr_80px] gap-4 text-white mb-3">
                <div className="flex items-center justify-center">
                    {number+1}
                </div>
                <div className="text-left">
                    <h3 className="font-semibold">{title}</h3>
                    <div>
                        {/* <span className="text-gray-300">{artist}</span>
                        <span className="mx-4">–</span> */}
                        <span className="text-gray-300">{album}</span>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="transition-all py-2 px-5 text-sm border border-gray-600 hover:border-gray-400 rounded-full">
                        Select
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Track;