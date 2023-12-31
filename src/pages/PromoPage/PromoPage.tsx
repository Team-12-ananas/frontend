import { Button, StyledEngineProvider } from "@mui/joy";
import "./PromoPage.scss";
import iconBadge from "../../assets/icons/iconBadge.svg";
import iconGroup from "../../assets/icons/iconGroup.svg";
import iconManVoice from "../../assets/icons/iconManVoice.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const PromoPage: React.FC = () => {
  const navigate = useNavigate();
  const promoPageTitle = "Яндекс Найм";
  const promoPageSubtitle = "здесь находят";
  const promoPageDescription = "более 100500 студентов в IT";
  const promoPageBtnLabel = "Создать вакансию";

  const badges = [
    {
      label: "База кандидатов с подтвержденными навыками",
      src: iconBadge,
    },
    {
      label: "Подберем список кандидатов под ваши требования",
      src: iconGroup,
    },
    {
      label: "Только активные кандидаты в поиске работы",
      src: iconManVoice,
    },
  ];

  const badgesElements = badges.map(({ src, label }) => {
    return (
      <div className="promoPage__advantage" key={label}>
        <img src={src} className="promoPage__icon" />
        <p className="promoPage__icon-description">{label}</p>
      </div>
    );
  });

  function handleCreateClick() {
    navigate("/create", { replace: true });
  }

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="promoPage">
        <div className="promoPage__container promoPage__container_type_bgImg">
          <div>
            <h1 className="promoPage__title">{promoPageTitle}</h1>
            <p className="promoPage__subtitle">{promoPageSubtitle}</p>
            <p className="promoPage__description">{promoPageDescription}</p>
            <Button
              type="button"
              size="lg"
              className="promoPage__button"
              onClick={handleCreateClick}
            >
              {promoPageBtnLabel}
            </Button>
          </div>
        </div>
        <div className="promoPage__container">
          <div className="promoPage__advantages">{badgesElements}</div>
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default PromoPage;
