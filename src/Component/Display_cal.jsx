import css from './Display_cal.module.css'
const Display_cal = (props) => {
  return (
    <>
      <div className={css.display}>
        <input type="text" placeholder="calculatar" value={props.calVal} readOnly />
      </div>
    </>
  );
};

export default Display_cal;
