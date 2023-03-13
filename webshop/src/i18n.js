import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "admin": "To admin view",
      "cart": "Cart",
      "contact": "Contact us",
      "shops": "Our shops",
      "maintain-shops": "Maintain shops",
      "maintain-categories": "Maintain categories",
      "add-product": "Add product",
      "maintain-products": "Maintain products",
    }
  },
  ee: {
    translation: {
      "admin": "Administraatori vaatesse",
      "cart": "Ostukorvi",
      "contact": "Kontakteeru meiega",
      "shops": "Meie poed",
      "maintain-shops": "Halda poode",
      "maintain-categories": "Halda kategooriaid",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;