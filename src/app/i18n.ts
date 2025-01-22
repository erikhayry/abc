export const INSTRUCTIONS = 'Instructions';
export const INGREDIENTS_LIST = 'ingredients list';
export const DONE = 'Done';
export const OR = 'or';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        instructions: INSTRUCTIONS,
        ingredientsList: INGREDIENTS_LIST,
        done: DONE,
        or: OR,
      },
    },
    // Add other languages here
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
