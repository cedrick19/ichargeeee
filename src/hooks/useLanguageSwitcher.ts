import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageCode {
  lng: string;
  active: boolean;
  code: string;
}

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language,
  );

  const defaultLang = (code: string) => {
    if (code === "enUS") {
      return true;
    } else if (selectedLanguage === code) {
      return true;
    } else return false;
  };

  const langCode: LanguageCode[] = [
    {
      lng: "ENG",
      active: defaultLang("en"),
      code: "en",
    },
    {
      lng: "CHI(简化)",
      active: defaultLang("zhTW"),
      code: "zhTW",
    },
    {
      lng: "CHI(传统的)",
      active: defaultLang("zhCN"),
      code: "zhCN",
    },
  ];
  const [language, setLanguage] = useState<LanguageCode[]>(langCode);

  const handleLanguageChange = (index: number, lng: string) => {
    handleValueChange(lng);
    setLanguage(
      language.map((data, idx) => {
        return idx === index
          ? { ...data, active: true }
          : { ...data, active: false };
      }),
    );
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const handleValueChange = (value: string) => {
    setSelectedLanguage(value);
    handleChangeLanguage(value);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    selectedLanguage,
    handleValueChange,
    language,
    handleLanguageChange,
  };
};

export default useLanguageSwitcher;
