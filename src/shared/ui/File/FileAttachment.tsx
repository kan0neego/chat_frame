import { pickFile } from "../..";
import type { FileBlob } from "../../../types";

type Props = {
  prevList?: FileBlob[];
  filterProp: (prevFile: FileBlob, nextFile: FileBlob) => boolean;
  onChange: (files: FileBlob[]) => void;
};

export default function FileAttachment(props: Props) {
  const { prevList, filterProp, onChange } = props;

  const filterEqual = (nextFiles: FileBlob[], prevFiles: FileBlob[]) => {
    return nextFiles.filter(
      (nextFile) => !prevFiles.find((prevFile) => filterProp(prevFile, nextFile))
    );
  };

  const setFile = (nextFiles: FileBlob[]) => {
    if (prevList) {
      const files = filterEqual(nextFiles, prevList);
      const result = [...prevList, ...files];
      onChange(result);
    } else {
      onChange(nextFiles);
    }
  };

  const prepareFileBlob = async (fileList: FileList) => {
    const serializedList = Array.from(fileList).map((file) => pickFile(file));
    const fileBlob = await Promise.all(serializedList);
    setFile(fileBlob);
  };

  return (
    <label className="file-attachment" htmlFor="file-att">
      <i className="fa fa-paperclip" aria-hidden="true"></i>
      <input
        id="file-att"
        type="file"
        multiple
        hidden
        onChange={(e) => {
          const nextFiles = e.target.files;
          if (nextFiles) {
            prepareFileBlob(nextFiles);
          }
        }}
      />
    </label>
  );
}
