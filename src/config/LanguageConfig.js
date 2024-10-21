import en from '../translations/en.json';
import es from '../translations/es.json';
import de from '../translations/de.json';
import zh from '../translations/zh.json';
const LanguageConfig = {
  languageList: async function () {
    let languageList = [
      {
        displayName: 'English',
        code: 'en',
      },
      {
        displayName: 'Spanish',
        code: 'es',
      },
      {
        displayName: 'German',
        code: 'de',
      },
      {
        displayName: 'Chinese',
        code: 'zh',
      },
    ];
    return languageList;
  },
  I18ConfigResources: function () {
    let resources = {
      en: {
        translations: en,
      },
      es: {
        translations: es,
      },
      de: {
        translations: de,
      },
      zh: {
        translations: zh,
      },
    };
    return resources;
  },
};
export default LanguageConfig;
