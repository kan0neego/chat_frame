import { mixed } from "yup";
import type { FileBlob } from "../../../types";

export const fileSchema = mixed<FileBlob | FileBlob[] | string | string[]>()
  .transform((value) => {
    if (Array.isArray(value)) {
      const files: FileBlob[] = [];
      for (const file of value) {
        // const startIndex = file.base64.indexOf(",");
        // const base64 = file.base64.slice(startIndex + 1);
        files.push({ ...file });
      }

      return files;
    } else if (typeof value === "object") {
      // const startIndex = value.base64.indexOf(",");
      // const base64 = value.base64.slice(startIndex + 1);
      return { ...value };
    }

    return value;
  })
  .test(
    "max-size",
    "Файл не должен быть больше 2МБ",
    (_, { originalValue }) => {
      const TWO_MB = 2.1e6;

      if (typeof originalValue === "object") {
        if (originalValue.fileSize > TWO_MB) return false;
      }

      if (originalValue instanceof FileList) {
        for (let i = 0; i < originalValue.length; i++) {
          const file = originalValue.item(i);
          if (file && file.size > TWO_MB) return false;
        }
      }
      return true;
    }
  );
