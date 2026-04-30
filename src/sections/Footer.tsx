import { getTranslations } from "next-intl/server";
import { socialImgs } from "@/constants";

const Footer = async () => {
  const t = await getTranslations("footer");

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{t("terms")}</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kaento Vidal. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
