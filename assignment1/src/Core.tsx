import style from "./Core.module.less";
import { Person } from "./Props";
import Props from "./Props";

function Core() {
  const persons: Person[] = [
    {
      id: 1,
      name: "이만재",
      age: 23,
    },
    {
      id: 2,
      name: "김수인",
      age: 23,
    },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>코어</div>
        <div className={style.main}>
          <Props persons={persons} />
        </div>
      </div>
    </>
  );
}

export default Core;
