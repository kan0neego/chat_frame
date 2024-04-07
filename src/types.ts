export type FileBlob = {
  base64: string;
  fileName: string;
  fileSize: number;
  fileType: string;
};

export type ChatMessage = {
  sender: string;
  text: string;
  attachment: FileBlob[];
  time: string;
};

export interface ChatRoom {
  id: string;
  token: string;
  users: string[];

  active: boolean;
  messages: ChatMessage[];

  updated_at: string;
  created_at: string;
}
