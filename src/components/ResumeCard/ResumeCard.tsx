import "./ResumeCard.scss";

import React from "react";

import photoCard from "../../assets/8920dizain 1.png";
import starPink from "../../assets/starPink.png";
import starYel from "../../assets/starYel.png";

const ResumeCard: React.FC = () => {
  return (
    <>
      <div className="resumeCard">
        <img src={photoCard} className="resumeCardPhoto" alt="фото" />
        <div className="resumeCardInfo">
          <h2 className="resumeCardName">Дарья Иванова</h2>
          <p className="resumeCardOccupation">Дизайнер интерфейсов</p>
          <p className="resumeCardDiscr">Без опыта работы</p>
          <p className="resumeCardDiscr">Более 3 проектов</p>
          <p className="resumeCardDiscr">Высшее образование</p>
          <p className="resumeCardDiscr">Санкт-Петербург</p>
        </div>
        <div className="cardTable">
          <div className="cardButtons">
            <button className="cardButtonToList">Подходит</button>
            <button className=" cardButtonLikeClicked"></button>
          </div>
          <span className="cardNote">Перенесен в базу</span>
          <div className="cardStars">
            <figure className="cardFigure">
              <img
                src={starPink}
                className="cardFigureImg"
                alt="розовая звезда"
              />
              <figcaption className="cardFigureFigcaption">
                Победитель в хакатоне
              </figcaption>
            </figure>
            <figure className="cardFigure">
              <img
                src={starYel}
                className="cardFigureImg"
                alt="желтая звезда"
              />
              <figcaption className="cardFigureFigcaption">
                Участник конкурсов
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
