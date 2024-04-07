import { ChatAction } from "../../../widgets/ChatAction";
import ChatMessages from "../../../widgets/ChatMessages/ui/ChatMessages";
import "./chat.scss";

export default function Chat() {
  return (
    <div className="chat-wrapper">
      {/* Left */}
      <div className="chat-list">{/* list */}</div>
      {/* Right */}
      <div className="chat-frame">
        <div className="chat-frame__messages">
          <div className="messages">
            <ChatMessages />
          </div>
        </div>
        <div className="chat-frame__chat-action">
          <ChatAction />
        </div>
      </div>
    </div>
  );
}
