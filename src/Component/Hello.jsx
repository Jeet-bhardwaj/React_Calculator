import style from "./Hello.module.css";
function Hello({ Buttons, handleOnClick }) {
  return (
    <>
      <div className={style.btn}>
        {Buttons.map((keyItem) => (
          <button className="btn" onClick={() => handleOnClick(keyItem)}>
            {keyItem}
          </button>
        ))}
      </div>
    </>
  );
}

export default Hello;
