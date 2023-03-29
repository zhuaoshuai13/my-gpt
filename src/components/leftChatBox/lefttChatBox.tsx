const LeftChatBox = () => {
  return (
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Roboat
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">抱歉，沒有</div>
  <div className="chat-footer opacity-50">
        Seen at 12:46
      </div>
</div>
  )
}

export default LeftChatBox