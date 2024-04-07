import { ChatBubble } from "../../../entities/Chat";
import { messageStore } from "../../../features/ChatMessages";

export default function ChatMessages() {
  const messages = messageStore((state) => state.messages);

  return (
    <>
      {messages.map((message) => (
        <ChatBubble
          key={message.time}
          sender={message.sender}
          time={message.time}
          text={message.text}
          attachments={message.attachment}
        />
      ))}
    </>
  );
}
