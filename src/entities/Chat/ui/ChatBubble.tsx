import { FileBlob } from "../../../types";
import Attachments from "./Attachments";
import "./chat-bubble.scss";

type Props = {
  sender: string;
  time: string;
  text?: string;
  attachments: FileBlob[];
  reverse?: boolean;
};

export default function ChatBubble(props: Props) {
  const { sender, time, text, reverse = false, attachments } = props;

  return (
    <div className="chat-bubble chat-bubble-wrapper">
      <div className="chat-bubble__message-info">
        <span>{sender}</span>
        <span>
          {new Date(time).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div
        className={`chat-bubble__message ${
          reverse ? "chat-bubble__message--reverse" : ""
        }`}
      >
        <p className="chat-bubble__message__text">{text}</p>
        {attachments.length > 0 ? (
          <Attachments attachments={attachments} />
        ) : null}
      </div>
    </div>
  );
}
