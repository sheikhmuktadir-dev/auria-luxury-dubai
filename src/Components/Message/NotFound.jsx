import Style from "./message.module.css";

export default function NotFound({ children }) {
  return (
    <p className={Style.notFound}>
      {children}
      <span className={Style.notFoundLoader}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </p>
  );
}
