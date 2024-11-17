import style from "./App.module.less";
import Core from "./Core";
import Member from "./Member";

function App() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.club}>24-25 GDG 3기 WEB 파트 조직도</p>
      </div>
      <div className={style.body}>
        <Core />
        <Member />
      </div>
      <div className={style.footer}></div>
    </div>
  );
}

export default App;
