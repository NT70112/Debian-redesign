const releases = [
  {
    version: "1.2",
    size: "20mb",
  },

  {
    version: "1.1",
    size: "23mb",
  },

  {
    version: "1.0",
    size: "22mb",
  },
];

(function appendVersions() {
  const isEnglish = document.documentElement.dataset.locale === 'en';
  const list = document.querySelector(".prev-releases__list");
  for (let release of releases) {
    const li = document.createElement("li");
    li.classList.add('prev-releases__list-iteam')
    li.innerHTML = `<div class="prev-releases__text">
    <div class="prev-releases__list-iteam__name">Debian version: ${release.version}</div>
    <div class="prev-releases__list-iteam__size">size: ${release.size}</div>
    </div>
    <a href="#" download="debianV${release.version}.txt" class="prev-releases__download-button button"><span>${isEnglish ? 'Download' : 'Скачать'}</span></a>`;
    list.append(li)
  }
})();
