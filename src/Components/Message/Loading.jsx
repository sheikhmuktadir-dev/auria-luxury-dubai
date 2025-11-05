import Style from "./message.module.css";

export default function Loading() {
  return (
    <div className={Style.scrollLoader}>
      <div className={Style.scrollLoaderInner}></div>
    </div>
  );
}
