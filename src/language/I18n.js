import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';

import ar from './ar';
import en from './en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18nManager.allowRTL(false);
  console.log('I18n.locale', I18n.locale);
  I18n.locale = I18nManager.isRTL ? 'ar' : 'en';
  console.log('I18n.locale', I18n.locale);
}

I18n.fallbacks = true;
I18n.translations = {
  ar,
  en,
};
export default I18n;
