const RightChatBox = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-header">
        Anakin
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">來點色圖</div>
      <div className="chat-footer opacity-50">
        Seen at 12:46
      </div>
    </div>
  )
}

export default RightChatBox