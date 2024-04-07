import { FileBlob } from "../../types";

export default async function pickFile(file: File): Promise<FileBlob> {
  const reader = new FileReader();
  return new Promise((res) => {
    reader.onloadend = () => {
      res({
        base64: reader.result as string,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      });
    };
    reader.readAsDataURL(file);
  });
}
