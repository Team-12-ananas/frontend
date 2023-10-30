import { Button } from "@mui/joy";
import "./Footer.scss";
import iconTg from "../../assets/icons/iconTelegram.svg";

const Footer: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__name">
          &#169; {currentYear} АНО ДПО «Образовательные технологии Яндекса»
        </div>
        <div>
          <Button
            color="neutral"
            variant="soft"
            className="footer__button"
            type="button"
          >
            <img src={iconTg} className="footer__button-icon" />
            Написать в поддержку
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
