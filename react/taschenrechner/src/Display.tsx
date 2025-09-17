function Display({ history, display }) {
    return (
        <div className="bg-gray-100 p-3 text-right text-6xl rounded-xl mb-6 shadow-md">
            {history !== undefined &&
                <span className="text-gray-400">
                    {history.substring(0, 7)}<br></br>
                </span>
            }
            {display.length < 7 ? (
                display
            ) : (
                display.substring(display.length - 7, display.length)
            )}
        </div>
    )
}

export default Display