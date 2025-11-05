import Style from "./message.module.css";

export default function ErrorMessage({ propertMsg }) {
  return (
    <div className={Style.errorState} role="alert" aria-live="assertive">
      <svg className={Style.errorIcon} viewBox="0 0 64 64" aria-hidden="true">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M20 20 L44 44 M44 20 L20 44"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <p className={Style.errorMessage}>
        {propertMsg
          ? "No matching properties found"
          : "Oops! Something went wrong"}
      </p>
    </div>
  );
}
