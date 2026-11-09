const isEnglish = document.documentElement.dataset.locale === 'en'

const moduleWindow = document.querySelector('.module-window__container')
moduleWindow.innerHTML = `<div class="backround invisible"></div>
    <div class="ModuleWindow invisible">
      <div class="ModuleWindow__container">
        <span>${isEnglish ? 'The download has started.<br> If it has not, start the live server.' : 'Скачивание началось. <br> если этого не произошло запустите live server'}</span>
        <button class="ModuleWindow__button" type="button" aria-label="${isEnglish ? 'Close window' : 'Закрыть окно'}">×</button>
      </div>
    </div>`

// ------------------------------------------------------------------------------


const moduleLanguageWindow = document.querySelector('.module-window-language__container')
const isDownloadPage = window.location.pathname.endsWith('download-page.html')
  || window.location.pathname.endsWith('download-page-eng.html')
const russianPage = isDownloadPage ? 'download-page.html' : 'index.html'
const englishPage = isDownloadPage ? 'download-page-eng.html' : 'index-eng.html'
moduleLanguageWindow.innerHTML = `<div class="language-window__backround invisible"></div>
    <div class="LanguageWindow invisible" id="language-dialog" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title">
      <div class="LanguageWindow__container">
        <h2 class="language-dialog__title" id="language-dialog-title">${isEnglish ? 'Choose a language' : 'Выберите язык'}</h2>
        <div class="language-options">
          <a class="language-link button" href="${russianPage}" lang="ru" ${isEnglish ? '' : 'aria-current="page"'}>Русский</a>
          <a class="language-link button" href="${englishPage}" lang="en" ${isEnglish ? 'aria-current="page"' : ''}>English</a>
        </div>
        <button class="language-window__close" type="button" aria-label="${isEnglish ? 'Close window' : 'Закрыть окно'}">×</button>
      </div>
    </div>`

// -----------------------------------------------------------------------------

const header = document.querySelector('.header-top')
header.innerHTML = `<div class="container">
          <div class="header-top__inner">
            <div class="header-top__mobile-menu">
              <div class="burger-menu__container">
                <div class="burger-menu__element"></div>
                <div class="burger-menu-bg invisible"> </div>
              </div>
              <div class="header-top__mobile-menu__container">
                <div class="header-top__mobile-menu__inner">
                  <a href="${isEnglish ? './index-eng.html' : './index.html'}" class="debian-logo__burger">
                    <img src="images/logo.png" alt="logo">
                  </a>
                  <ul class="nav-list">
                    <li class="nav-list__item"><a href="#community">${isEnglish ? 'Community' : 'Сообщество'}</a></li>
                    <li class="nav-list__item"><a href="#news">${isEnglish ? 'News' : 'Микроновости'}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="${isEnglish ? './index-eng.html' : './index.html'}" class="debian-logo">
              <img src="images/logo.png" alt="">
            </a>
            <nav class="header-top__nav">
              <ul class="nav-list">
                <li class="nav-list__item"><a href="#community">${isEnglish ? 'Community' : 'Сообщество'}</a></li>
                <li class="nav-list__item"><a href="#news">${isEnglish ? 'News' : 'Микроновости'}</a></li>
              </ul>
            </nav>
            <form class="search-bar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.83333 11.6667C7.29417 11.6667 8.62625 11.1258 9.64958 10.2388L15 15.5892L15.5892 15L10.2388 9.64958C11.1258 8.62625 11.6667 7.29417 11.6667 5.83333C11.6667 2.61167 9.055 0 5.83333 0C2.61167 0 0 2.61167 0 5.83333C0 9.055 2.61167 11.6667 5.83333 11.6667ZM5.83333 0.833333C8.59042 0.833333 10.8333 3.07625 10.8333 5.83333C10.8333 8.59042 8.59042 10.8333 5.83333 10.8333C3.07625 10.8333 0.833333 8.59042 0.833333 5.83333C0.833333 3.07625 3.07625 0.833333 5.83333 0.833333Z"
                  fill="#464646" />
              </svg>
              <input class="search" type="search" name="search">
              <button class="search-bar__button">${isEnglish ? 'Search' : 'Найти'}</button>
            </form>
            <button class="change-language__button" type="button" aria-label="${isEnglish ? 'Change language' : 'Сменить язык'}" aria-haspopup="dialog" aria-controls="language-dialog">
              <svg class="change-language__icon" width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 26.5417C7.08165 26.5417 1.45831 20.9184 1.45831 14C1.45831 7.08171 7.08165 1.45837 14 1.45837C20.9183 1.45837 26.5416 7.08171 26.5416 14C26.5416 20.9184 20.9183 26.5417 14 26.5417ZM14 3.20837C8.04998 3.20837 3.20831 8.05004 3.20831 14C3.20831 19.95 8.04998 24.7917 14 24.7917C19.95 24.7917 24.7916 19.95 24.7916 14C24.7916 8.05004 19.95 3.20837 14 3.20837Z"
                  fill="#464646" />
                <path
                  d="M10.5 25.375H9.33336C8.85503 25.375 8.45836 24.9783 8.45836 24.5C8.45836 24.0217 8.8317 23.6367 9.31003 23.625C7.47836 17.3717 7.47836 10.6283 9.31003 4.375C8.8317 4.36333 8.45836 3.97833 8.45836 3.5C8.45836 3.02167 8.85503 2.625 9.33336 2.625H10.5C10.78 2.625 11.0484 2.765 11.2117 2.98667C11.375 3.22 11.4217 3.51167 11.3284 3.78C9.13503 10.3717 9.13503 17.6283 11.3284 24.2317C11.4217 24.5 11.375 24.7917 11.2117 25.025C11.0484 25.235 10.78 25.375 10.5 25.375Z"
                  fill="#464646" />
                <path
                  d="M17.5 25.375C17.4067 25.375 17.3133 25.3633 17.22 25.3283C16.765 25.1767 16.5083 24.675 16.6717 24.22C18.865 17.6283 18.865 10.3717 16.6717 3.76834C16.52 3.31334 16.765 2.81167 17.22 2.66001C17.6867 2.50834 18.1767 2.75334 18.3283 3.20834C20.65 10.1617 20.65 17.815 18.3283 24.7567C18.2117 25.1417 17.8617 25.375 17.5 25.375Z"
                  fill="#464646" />
                <path
                  d="M14 20.0667C10.745 20.0667 7.50167 19.6117 4.375 18.69C4.36333 19.1567 3.97833 19.5417 3.5 19.5417C3.02167 19.5417 2.625 19.145 2.625 18.6667V17.5C2.625 17.22 2.765 16.9517 2.98667 16.7884C3.22 16.625 3.51167 16.5784 3.78 16.6717C10.3717 18.865 17.64 18.865 24.2317 16.6717C24.5 16.5784 24.7917 16.625 25.025 16.7884C25.2583 16.9517 25.3867 17.22 25.3867 17.5V18.6667C25.3867 19.145 24.99 19.5417 24.5117 19.5417C24.0333 19.5417 23.6483 19.1684 23.6367 18.69C20.4983 19.6117 17.255 20.0667 14 20.0667Z"
                  fill="#464646" />
                <path
                  d="M24.5 11.375C24.4066 11.375 24.3133 11.3633 24.22 11.3283C17.6283 9.135 10.36 9.135 3.7683 11.3283C3.30164 11.48 2.81164 11.235 2.65997 10.78C2.51997 10.3133 2.76497 9.82334 3.21997 9.67167C10.1733 7.35 17.8266 7.35 24.7683 9.67167C25.2233 9.82334 25.48 10.325 25.3166 10.78C25.2116 11.1417 24.8616 11.375 24.5 11.375Z"
                  fill="#464646" />
              </svg>
            </button>
          </div>
        </div>`

if (isDownloadPage){
  const nav = document.querySelector('.header-top__nav')
  let burger = document.querySelector('.header-top__mobile-menu__inner')
  nav.querySelector('.nav-list').style.display = 'none'
  burger.querySelector('.nav-list').innerHTML = `<li class="nav-list__item"><a href="${isEnglish ? "./index-eng.html" : "./index.html"}">${isEnglish ? 'Main' : 'Главная'}</a></li>`
  header.querySelector('.search-bar').style.display = 'none'
}


$(document).on("click", ".change-language__button", function () {
  $(".LanguageWindow, .language-window__backround").removeClass("invisible");
});
$(document).on("click", ".language-window__close, .language-window__backround", function () {
  $(".LanguageWindow, .language-window__backround").addClass("invisible");
});

// -----------------------------------------------------------------------------------


const footer = document.querySelector('.footer')
footer.innerHTML = `<div class="container">
        <div class="footer__inner">
          <div class="footer__row">
            <span>${isEnglish ? 'For contact information, please see our <a href="#">contact page</a>.' : 'Для связи обратитесь к нашей <a href="#">странице контактов</a>.'}</span>
          </div>
          <div class="footer__row">
            <span>${isEnglish ? 'Last modified: Sat, 9 Dec 2023, 08:34:14 UTC' : 'Последнее изменение: Сбт, 9 Дек 2023, 08:34:14 UTC'}</span>
            <span>${isEnglish ? 'Last build: Sun, 19 Jan 2025, 23:45:53 UTC' : 'Последняя сборка: Вск, 19 Янв 2025, 23:45:53 UTC'}</span>
          </div>
          <div class="footer__row">
            <span>${isEnglish ? 'Copyright © 1997-2025 SPI and others; see license terms' : 'Авторские права © 1997-2025 SPI и другие; См. условия лицензии'}</span>
          </div>
          <div class="footer__row">
            <span>${isEnglish ? 'Debian is a registered trademark of Software in the Public Interest, Inc.' : 'Debian является зарегистрированным товарным знаком компании Software in the Public Interest, Inc.\n              (Программное обеспечение в интересах общества)'}</span>
          </div>
        </div>
    </div>`

// --------------------------------------------------------------------------------------------