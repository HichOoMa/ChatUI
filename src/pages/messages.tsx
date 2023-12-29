import { useEffect } from "react";
import Message from "../components/message";
import SendField from "../components/sendField";
import { useProfileStore } from "../store/profile";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const Messages = () => {
  const { username } = useAuthStore();
  const { messages, friends, fetchMessages } = useProfileStore();
  // friend id
  const { id } = useParams();
  const friend = friends && friends.find((friend) => friend._id === id);
  if (id && !messages[id]) {
    fetchMessages(id);
  }
  useEffect(() => {}, [messages]);
  return (
    <main className="h-full w-full relative">
      <div className="p-4">
        {id &&
          messages[id] &&
          messages[id]?.map((message) => {
            return (
              <Message
                key={message._id}
                username={message.sender_id === id && friend ? friend.name : username}
                userphotoUrl={
                  "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                }
                content={message.content}
                date={new Date(Date.parse(message.date))}
                showDetails={false}
                userSender={message.sender_id !== id}
              />
            );
          })}
      </div>
      <SendField />
    </main>
  );
};
export default Messages;
