import Box from "@mui/joy/Box";
import "./VacancyCard.scss";
import { JobPostRequest } from "../../mockapi/api-vacancy";
import { Link } from "react-router-dom";

interface IProps {
  vacancy: JobPostRequest;
  withLink?: number;
  withPadding?: boolean;
  disabled?: boolean;
}

const VacancyCard: React.FC<IProps> = ({
  vacancy,
  withLink,
  withPadding = false,
  disabled = false,
}) => {
  const classNameBox = `card  ${
    withPadding ? "card_type_with-padding" : "vacancy__card"
  } ${disabled ? "card_disabled" : ""}`;

  return (
    <Box className={classNameBox}>
      <h2 className="card__title">{vacancy.name}</h2>
      <div className="card__cost">
        <span className="card__price">{vacancy.min_salary} ₽</span>
        <span className="card__budget">Бюджет {vacancy.max_salary} ₽</span>
      </div>
      <p className="card__city">{vacancy.city}</p>
      <div className="card__contacts">
        <p className="card__phone">{vacancy.phone}</p>
        <p className="card__email">{vacancy.email}</p>
      </div>
      {withLink && (
        <Link to={`/vacancy/${vacancy.id}`} className="card__link">
          Найдено 4 кандидата
        </Link>
      )}
    </Box>
  );
};

export default VacancyCard;
