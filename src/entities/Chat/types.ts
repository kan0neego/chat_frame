import type { FileBlob } from "../../types";

export type ChatMessage = {
  sender: string;
  text: string;
  time: string;
  attachment: FileBlob[];
};
