const Track = ({number,title,artist}) => {
    return (
        <div>
            <div className="grid grid-cols-[50px_1fr_80px] gap-4 text-white mb-3">
                <div className="flex items-center justify-center">
                    {number+1}
                </div>
                <div className="text-left">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-gray-300">{artist}</p>
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