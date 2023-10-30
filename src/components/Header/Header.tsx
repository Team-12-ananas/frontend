import Avatar from "@mui/joy/Avatar";
import Option from "@mui/joy/Option";
import "./Header.scss";
import iconAvatar from "../../assets/icons/iconAvatar.svg";
import iconNotificationActive from "../../assets/icons/iconNotificationActive.svg";
import iconNotificationDefault from "../../assets/icons/iconNotificationDefault.svg";
import iconKeyboardArrowDown from "../../assets/icons/iconCaretDown.svg";

import headerLogo from "../../assets/HeaderLogo.svg";
import { Select, StyledEngineProvider } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const isHasNotification = true;

  const options = ["ООО «Каштанка»", "ООО «Ананас»", "«Команда №12»"];
  const optionsElement = options.map((item) => {
    return (
      <Option value={item} className="header__option" key={item}>
        {item}
      </Option>
    );
  });

  const navItemText = ["Избранное", "Мои вакансии"];
  const profileName = "Константин Константинов";
  const navigate = useNavigate();

  return (
    <StyledEngineProvider injectFirst>
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={headerLogo} className="header__logo" />
            </div>
            <nav>
              <ul className="header__nav">
                <li className="header__nav-item header__nav-item_active">
                  <Link to={"/favorites"} className="header__nav-link">
                    {navItemText[0]}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={"/my-vacancies"} className="header__nav-link">
                    {navItemText[1]}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Select
                    defaultValue={options[0]}
                    className="header__select"
                    variant="plain"
                    indicator={<img src={iconKeyboardArrowDown} />}
                  >
                    {optionsElement}
                  </Select>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__wrapper header__wrapper_type_right">
            <img
              className="header__notification"
              src={
                isHasNotification
                  ? iconNotificationActive
                  : iconNotificationDefault
              }
            />
            <div className="header__profile">
              <p className="header__profile-name">{profileName}</p>
              <Avatar
                color="neutral"
                size="md"
                variant="soft"
                src={iconAvatar}
                className="header__avatar"
              />
            </div>
          </div>
        </div>
      </header>
    </StyledEngineProvider>
  );
};

export default Header;
