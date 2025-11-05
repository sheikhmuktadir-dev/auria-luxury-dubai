import Style from "./errorpage.module.css";
import Button from "../../Components/Button/Button";

export default function ErrorPage() {
  return (
    <div className={Style.errorBox}>
      <h1>404</h1>
      <h3>(This page doesn't seem to exist)</h3>
      <div className={Style.errorBoxBtn}>
        <Button url="/">Back To Home</Button>
      </div>
    </div>
  );
}
