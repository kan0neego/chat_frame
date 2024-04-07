import "./file.scss";

type Props = {
  name: string;
  type?: string;
  disabled?: boolean;
  removeFile: () => void;
};

export const filetypeIcon: { [key: string]: string } = {
  "application/pdf": "fa-file-pdf-o",
  "application/msword": "fa-file-word-o",
  "application/vnd.ms-excel": "fa-file-excel-o",
  "application/zip": "fa-file-archive-o",
  "audio/mpeg": "fa-file-audio-o",
  "audio/ogg": "fa-file-audio-o",
  "text/plain": "fa-file-text",
  "text/css": "fa-file-text",
  "text/csv": "fa-file-text",
  "text/html": "fa-file-text",
  "text/javascript:": "fa-file-text",
  "text/xml": "fa-file-text",
  "image/avif": " fa-file-image-o",
  "image/jpeg": " fa-file-image-o",
  "image/png": " fa-file-image-o",
  "image/svg+xml": "fa-file-image-o",
  "image/tiff": " fa-file-image-o",
};

export default function File({ name, type, disabled, removeFile }: Props) {
  return (
    <div className="file-list__file">
      <span className="file-list__file__icon">
        <i className={`fa ${type ? filetypeIcon[type] ?? "fa-file-o" : "fa-file-o"}`}></i>
      </span>
      <span className="file-list__file__name">{name}</span>
      <button
        disabled={disabled}
        className="file-list__file__remove-button"
        onClick={removeFile}
      >
        <span className="file-list__file__remove-button__icon">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="delete"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
