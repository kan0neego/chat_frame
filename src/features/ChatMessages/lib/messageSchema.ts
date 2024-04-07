import { object, string } from "yup";
import { getSchema } from "../../../shared";
import type Yup from "yup";


export const messageSchema = object({
  sender: string(),
  text: string().notRequired(),
  time: string(),
  attachment: getSchema("file-schema").notRequired(),
});

export type MessageSchema = Yup.InferType<typeof messageSchema>;

