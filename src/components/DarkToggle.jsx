
const DarkToggle = ({ mode, toggle }) => {
    return (
        <div className="w-12 h-6 border-2 border-gray-500 rounded-xl flex items-center justify-between relative cursor-pointer" onClick={toggle}>
            <div className="text-sm pl-1">🌙</div>
            <div className="text-sm">🔆</div>
            <div
                className="w-5 h-5 bg-accent rounded-full absolute"
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
}

export default DarkToggle