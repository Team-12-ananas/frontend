import Avatar from "@mui/joy/Avatar";
import Option from "@mui/joy/Option";
import "./Header.scss";
import iconAvatar from "../../assets/icons/iconAvatar.svg";
import iconNotificationActive from "../../assets/icons/iconNotificationActive.svg";
import iconNotificationDefault from "../../assets/icons/iconNotificationDefault.svg";
import iconKeyboardArrowDown from "../../assets/icons/iconCaretDown.svg";

import headerLogo from "../../assets/HeaderLogo.svg";
import { Select, StyledEngineProvider } from "@mui/joy";

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

  return (
    <StyledEngineProvider injectFirst>
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <div>
              <img src={headerLogo} className="header__logo" />
            </div>
            <nav>
              <ul className="header__nav">
                <li className="header__nav-item header__nav-item_active">
                  Мои вакансии
                </li>
                <li className="header__nav-item">Избранное</li>
                <li className="header__nav-item">
                  <Select
                    defaultValue={"ООО «Каштанка»"}
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
              <p className="header__profile-name">Константин Константинов</p>
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
