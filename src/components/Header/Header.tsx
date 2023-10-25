import Avatar from "@mui/joy/Avatar";
import "./Header.scss";
import iconAvatar from "../../assets/icons/iconAvatar.svg";
import iconNotificationActive from "../../assets/icons/iconNotificationActive.svg";
import iconNotificationDefault from "../../assets/icons/iconNotificationDefault.svg";

import headerLogo from "../../assets/HeaderLogo.svg";

const Header: React.FC = () => {
  const isHasNotification = true;

  return (
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
                ООО «Каштанка» <img />
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__wrapper header__wrapper_type_right">
          <img
            src={
              isHasNotification
                ? iconNotificationActive
                : iconNotificationDefault
            }
          />
          <div className="header__profile">
            <p className="header__profile-description">
              Константин Константинов
            </p>
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
  );
};

export default Header;
