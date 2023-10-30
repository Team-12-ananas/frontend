import "./ResumeCard.scss";
import React from "react";
import { IStudent } from "../../mockapi/api-students";
import MyButton from "../../UI/MyButton/MyButton";
import BadgeContestant from "../BadgeContestant/BadgeContestant";
import BadgeWinner from "../BadgeWinner/BadgeWinner";
import { useLocation } from "react-router-dom";

type TFuncForFavorite = (studentId: number) => Promise<void>;

interface IProps {
  resume: IStudent;
  inBase?: boolean;
  isFavorite?: boolean;
  onClick: TFuncForFavorite | (() => void);
  handlePopupOpen: (id: number) => void;
}

const ResumeCard: React.FC<IProps> = ({
  resume,
  inBase = false,
  isFavorite = false,
  onClick,
  handlePopupOpen,
}) => {
  const location = useLocation();
  const inviteBtnElem = location.pathname !== "/favorites" && (
    <MyButton
      className="cardButtonToList"
      onClick={async (e: React.MouseEvent) => {
        e.stopPropagation();
        await onClick(resume.id);
      }}
    >
      Подходит
    </MyButton>
  );

  return (
    <div className="resumeCard" onClick={() => handlePopupOpen(resume.id)}>
      <img src={resume.avatar} className="resumeCard__photo" alt="фото" />
      <div className="resumeCardInfo">
        <h2 className="resumeCardName">{resume.name}</h2>
        <p className="resumeCardOccupation">{resume.specialty}</p>
        <p className="resumeCardDiscr">{`Опыт работы: ${resume.jobExpirience}`}</p>
        <p className="resumeCardDiscr">{resume.projects}</p>
        <p className="resumeCardDiscr">{resume.educationType}</p>
        <p className="resumeCardDiscr">{resume.city}</p>
      </div>
      <div className="cardTable">
        <div
          className={`${
            location.pathname !== "/favorites"
              ? "cardButtons"
              : "cardButtons__type_solo"
          }`}
        >
          {isFavorite ? (
            <MyButton
              className="cardButtonToList"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onClick(resume.id);
              }}
            >
              Пригласить
            </MyButton>
          ) : (
            inviteBtnElem
          )}
          <button className=" cardButtonLikeClicked"></button>
        </div>
        {inBase && <span className="cardNote">Перенесен в базу</span>}

        <div className="cardStars">
          {resume.achievement.map((item, i) => {
            return i % 2 === 0 ? (
              <BadgeContestant key={item} />
            ) : (
              <BadgeWinner key={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
