import { Dispatch, SetStateAction, useRef } from "react";
import { messageStore, messageSchema } from "../../../features/ChatMessages";
import type { FileBlob } from "../../../types";
import type { ChatMessage } from "../../../entities/Chat";
import "./editable-input.scss";

type Props = {
  fileList: FileBlob[];
  setFileList: Dispatch<SetStateAction<FileBlob[]>>;
};

export default function EditableInput({ fileList, setFileList }: Props) {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const setMessage = messageStore((state) => state.setMessage);

  const handleClick = async () => {
    const text = inputRef.current?.textContent;
    if ((!text && fileList.length < 1)) return;
    const createdAt = new Date().toISOString();
    if (inputRef.current) inputRef.current.textContent = "";
    const message = await messageSchema.validate({
      sender: "Tim Roman",
      text,
      attachment: fileList,
      time: createdAt,
    });
    setMessage(message as ChatMessage);
    setFileList([]);
  };

  return (
    <>
      <div
        ref={inputRef}
        role="textbox"
        className="chat-message-input"
        contentEditable={true}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            event.preventDefault();
            handleClick();
          }
        }}
      ></div>
      <button className="chat-message-send-button" onClick={handleClick}>
        <i className="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
    </>
  );
}
