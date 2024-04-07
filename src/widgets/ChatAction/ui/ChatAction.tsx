import { EditableInput, File, FileAttachment } from "../../../shared";
import { useState } from "react";
import type { FileBlob } from "../../../types";
import "./chat-action.scss";

export default function ChatAction() {
  const [fileList, setFileList] = useState<FileBlob[]>([]);

  return (
    <>
      <div className="chat-action__wrapper">
        <FileAttachment
          prevList={fileList}
          onChange={(files) => setFileList(files)}
          filterProp={(prevFile, nextFile) =>
            prevFile.fileName === nextFile.fileName
          }
        />
        <EditableInput fileList={fileList} setFileList={setFileList} />
      </div>
      <div className="file-list-wrapper">
        {fileList?.map((file) => (
          <File
            key={file.fileName}
            name={file.fileName}
            type={file.fileType}
            removeFile={() => {
              setFileList(
                fileList.filter((el) => el.fileName !== file.fileName)
              );
            }}
          />
        ))}
      </div>
    </>
  );
}
