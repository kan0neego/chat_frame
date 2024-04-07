import { useMemo, useState } from "react";
import { filetypeIcon } from "../../../shared/ui/File/File";
import type { FileBlob } from "../../../types";
import "./attachments.scss";

type Props = {
  attachments: FileBlob[];
};

const LAST_ATTACHMENT = 4;

export default function Attachments({ attachments }: Props) {
  const [isFull, setFull] = useState(false);
  const visibleContent = useMemo(() => {
    if (!isFull && attachments.length > LAST_ATTACHMENT) {
      return attachments.slice(0, LAST_ATTACHMENT);
    }
    return attachments;
  }, [attachments, isFull]);

  return (
    <div
      className={`chat-bubble__message__attachments ${
        attachments.length > 1 ? "attachments--two-col" : ""
      }`}
    >
      {visibleContent.map((file, index) => (
        <div
          className={`attachments__image-wrapper ${
            attachments.length < 2
              ? "attachments__image-wrapper--height-195"
              : ""
          }`}
        >
          {index === LAST_ATTACHMENT - 1 && !isFull ? (
            <button
              className="attachments__image-wrapper__last-button"
              onClick={() => setFull(true)}
            >
              <span>+ {attachments.length - LAST_ATTACHMENT}</span>
            </button>
          ) : (
            <button className="attachments__image-wrapper__save_button">
              <i className={`fa fa-arrow-circle-down`} />
            </button>
          )}
          {file.fileType.includes("application") ? (
            <>
              <span className="image-wrapper__icon">
                <i className={`fa ${filetypeIcon[file.fileType]}`} />
              </span>
              <div className="image-wrapper__text-wrapper">
                <span className="image-wrapper__text">{file.fileName}</span>
              </div>
            </>
          ) : file.fileType.includes("image") ? (
            <img
              className="image-wrapper__image"
              src={file.base64}
              alt={file.fileName}
            />
          ) : (
            <>
              <span className="image-wrapper__icon">
                <i className="fa fa-file-o" />
              </span>
              <div className="image-wrapper__text-wrapper">
                <span className="image-wrapper__text">{file.fileName}</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
