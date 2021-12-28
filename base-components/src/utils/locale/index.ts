/**
 * 国际化相关函数
 */
 import { ConfigProvider } from '@alifd/next';
 import zhCN from './zh-cn';
 import enUS from './en-us';
 import zhTW from './zh-tw';
 
 const languageMap: any = {
   'zh-cn': zhCN,
   'en-us': enUS,
   'zh-tw': zhTW,
 };
 
 let extraLanguageMap: any = {
   'zh-cn': {},
   'en-us': {},
   'zh-tw': {},
 };
 
 export function getLanguage() {
   return ConfigProvider.getLanguage();
 }
 
 export function setLocale(targetMap: any) {
   extraLanguageMap = targetMap;
 }
 
 export function getSourceLocale() {
   return languageMap;
 }
 
 export function getMessage(id: string, data?: any) {
   const language = ConfigProvider.getLanguage();
  //  const language = ConfigProvider.getLanguage();
   
   return (
     getDeepValue(id, extraLanguageMap[language]) ||
     getDeepValue(id, languageMap[language]) ||
     getDeepValue(id, zhCN) ||
     id
   ).replace(
     /\{(\S)*?\}/g,
     (key: string) => data[key.substr(1, key.length - 2)],
   );
 }
 
 export default function getDeepValue(path: any, value: any) {
  if (typeof path === 'string') {
    if (path === '_self') {
      return value;
    } else {
      try {
        const sections = path.split('.');
        return sections.reduce((pre, cur) => pre[cur], value);
      } catch (e) {
        return undefined;
      }
    }
  } else if (typeof path === 'function') {
    return path(value);
  } else {
    return value;
  }
}
