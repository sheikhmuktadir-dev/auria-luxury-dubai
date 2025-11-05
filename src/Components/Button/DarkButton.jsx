import Style from "./button.module.css";

export default function DarkButton({ children, type, click = undefined }) {
  return (
    <button
      type={type || "button"}
      onClick={click || undefined}
      className={Style.darkButton}
    >
      {children}
    </button>
  );
}
