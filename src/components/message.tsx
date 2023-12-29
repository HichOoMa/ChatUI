interface Props {
  username: string;
  userphotoUrl: string;
  content: string;
  date: Date;
  showDetails: boolean;
  // true if the message is sent by current user
  userSender: boolean;
}
const Message = ({ username, userphotoUrl, content, date, showDetails, userSender }: Props) => {
  return (
    <div className={`chat ${userSender ? "chat-end" : "chat-start"}`}>
      {showDetails && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user photo" src={userphotoUrl} />
          </div>
        </div>
      )}
      {!showDetails && (
        <div className="chat-header ml-10">
          {username}
          <time className="text-xs opacity-50 ml-3">
            {date.getHours()}:{date.getMinutes()}
          </time>
        </div>
      )}
      <div className={`chat-bubble bg-primary ${!showDetails ? "ml-[37.5px] " : ""}`}>
        {content}
      </div>
    </div>
  );
};
export default Message;
