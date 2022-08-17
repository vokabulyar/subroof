interface IButton {
  label: string;
  onClick: () => void;
}
export const Button = ({
  label = "",
  onClick = () => alert("Не передан обработчик в кнопку"),
}: IButton) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
