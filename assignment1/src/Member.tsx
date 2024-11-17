import style from "./Member.module.less";
import { Person } from "./Props";
import Props from "./Props";

function Member() {
  const persons: Person[] = [
    {
      id: 3,
      name: "전병주",
      age: 23,
    },
    {
      id: 4,
      name: "김산호",
      age: 24,
    },
    {
      id: 5,
      name: "조정현",
      age: 24,
    },
    {
      id: 6,
      name: "임예솔",
      age: 23,
    },
    {
      id: 7,
      name: "조민영",
      age: 24,
    },
    {
      id: 8,
      name: "박수진",
      age: 21,
    },
    {
      id: 9,
      name: "고지수",
      age: 24,
    },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>멤버</div>
        <div className={style.main}>
          <Props persons={persons} />
        </div>
      </div>
    </>
  );
}

export default Member;
