
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const textSelector = "=";
//const idSelector = "#";
//const classSelector = ".";

const testHost = process.env.TEST_HOST;
const password = process.env.AUTH_USER_PASSWORD;
const user = process.env.AUTH_USER;
const imgPatPath = process.env.IMG_PAT_PATH;
const host = process.env.HOST;

const imageTemplatePath = "./img_pat";
const templAutFormImageName = "aut_m.png";
const templAutFormActualImageName = "actual.png";
const templAutFormExpectedImageName = "expected.png";
const templAutFormDiffImageName = "expected.png";
const encodingType = "base64";

const userSelector = "#username";
const passwordSelector = "#password";
const menuExitSelector = "=Выйти";
const submitButtonSelector = '#kc-login';
const userNameSelector =  textSelector.concat(process.env.AUTH_USER_NAME);
const resetCreditansUrl = process.env.RESET_CREDINTAILS_URL;
const resetCreditansSelector = "black=Восстановить пароль";
const resetCreditansLabelSelector = "div=Восстановление пароля";
const registrationSelector = "a=Регистрация";
const registrationUrl = process.env.REGISTRATION_URL;
const termsUrl = process.env.TERM_OF_SERVICE_URL;
const termsSelector = "a=Пользовательского соглашения";
const termsLabelSelector = "h1=Уважаемые абоненты";
const errorWrongUserPassSelector = ".kc-feedback-text=Неправильное имя пользователя или пароль.";
const errorCapchaSelector = ".kc-feedback-text=Неверно введен текст с картинки";


// An abstraction on top of our host. Instead of crafting urls directly every time,
// we can call this convenient class:
//
//  "site: "new TestSite('http://github.com');
//
class TestSite {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}

module.exports = {
  // page url builder for our test site
  site: new TestSite(testHost),
  // configuration object for Selenium
  selenium: {
    host: host,
    capabilities:
      { 
        browserName: "firefox" 
      }
  },
  // test params
  testing: {   
    "imgPatPath" : imgPatPath,
    "user" : user,
    "password" : password,
    "userSelector" : userSelector,
    "userNameSelector" : userNameSelector,
    "passwordSelector" : passwordSelector,
    "menuExitSelector" : menuExitSelector,
    "submitButtonSelector" : submitButtonSelector,
    "resetCreditansUrl" : resetCreditansUrl,
    "resetCreditansSelector" : resetCreditansSelector,
    "resetCreditansLabelSelector" : resetCreditansLabelSelector,
    "registrationSelector" : registrationSelector,
    "registrationUrl" : registrationUrl,
    "termsUrl" : termsUrl,
    "termsSelector" : termsSelector,
    "termsLabelSelector" : termsLabelSelector,
    "errorWrongUserPassSelector" : errorWrongUserPassSelector,
    "errorCapchaSelector" : errorCapchaSelector,
    "imageTemplatePath" : imageTemplatePath,
    "templAutFormImageName" : templAutFormImageName,
    "templAutFormActualImageName" : templAutFormActualImageName,
    "templAutFormExpectedImageName" : templAutFormExpectedImageName,
    "templAutFormDiffImageName" : templAutFormDiffImageName,
    "encodingType" : encodingType
  },
  // generates a random string of the specified length
  makeRandomString :  (length) => {
    var result           = '';
    var characters       = "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯяABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/!@#$%^&*()-=_+.'/|`";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
};
