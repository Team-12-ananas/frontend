import "./BadgeWinner.scss";

const BadgeWinner = () => {
  return (
    <div className="badge">
      <div className="badge__icon badge__icon_winner" />
      <p className="badge__text">Победитель в&nbsp;хакатоне</p>
    </div>
  );
};

export default BadgeWinner;
