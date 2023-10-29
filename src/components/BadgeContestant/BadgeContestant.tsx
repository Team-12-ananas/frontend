import "./BadgeContestant.scss";

import React from "react";

const BadgeContestant = () => {
  return (
    <div className="badge">
      <div className="badge__icon badge__icon_contestant" />
      <p className="badge__text">Участник конкурсов</p>
    </div>
  );
};

export default BadgeContestant;
