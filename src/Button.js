export const Button = (props) => {
  const style = getStyles(props.color);

  const alertUser = () => {
    alert(`You clicked the ${props.notification} button`);
  };

  return (
    <button onClick={alertUser} style={style.primaryButton}>
      {props.notification}
    </button>
  );
};

const getStyles = (color) => {
  return {
    primaryButton: {
      background: color,
      border: "3px solid royalblue",
      color: "white",
    },
  };
};
export default Button;
