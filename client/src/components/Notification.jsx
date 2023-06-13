const Notification = ({ message }) => {
    return message.error
        ? <div
            className="bg-[#240b0b] flex items-center pl-2 h-full border-2 border-[#a33a3a] text-[#ba3939]"
        >
            {message.error}
        </div>
        : (
            <></>
        )
}

export default Notification