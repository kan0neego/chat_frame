import { fileSchema } from "./fileSchema";
import type Yup from "yup";

export default function getSchema(schema: "file-schema") {
  return {
    "file-schema": fileSchema,
  }[schema];
}

export type FileSchema = Yup.InferType<typeof fileSchema>;
