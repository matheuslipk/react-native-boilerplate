import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import pt from './pt';

i18n.use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng: 'pt',
});

export default i18n;
