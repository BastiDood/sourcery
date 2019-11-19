import PROFILES from './citation-profiles.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set necessary variables for each input element
  /** @type {HTMLFormElement} */
  const el_MainForm = (document.getElementById('main-form'));
  /** @type {HTMLSelectElement} */
  const el_CitationStyle = (document.getElementById('citation-style'));
  /** @type {HTMLSelectElement} */
  const el_CitationMode = (document.getElementById('citation-mode'));
  /** @type {HTMLInputElement} */
  const el_FirstName = (document.getElementById('firstName'));
  /** @type {HTMLInputElement} */
  const el_MiddleName = (document.getElementById('middleName'));
  /** @type {HTMLInputElement} */
  const el_LastName = (document.getElementById('lastName'));
  /** @type {HTMLInputElement} */
  const el_Title = (document.getElementById('title'));
  /** @type {HTMLInputElement} */
  const el_PublishDate = (document.getElementById('publishDate'));
  /** @type {HTMLInputElement} */
  const el_AccessDate = (document.getElementById('accessDate'));
  /** @type {HTMLInputElement} */
  const el_Url = (document.getElementById('url'));
  /** @type {HTMLInputElement} */
  const el_Doi = (document.getElementById('doi'));
  /** @type {HTMLInputElement} */
  const el_PublisherName = (document.getElementById('publisherName'));

  // Form controls
  /** @type {HTMLButtonElement} */
  const el_Butt = (document.getElementById('submitButt'));
  /** @type {HTMLDivElement} */
  const el_PreviewTarget = (document.getElementById('citation-preview-target'));

  // Remove unnecessary inputs for selected citation mode
  function filterInputs() {
    /** @type {HTMLDivElement[]} */
    const divs = (Array.from(document.getElementsByClassName('input-entry')));
    const CITATION_MODE = el_CitationMode.value;
    for (const div of divs) {
      /** @type {HTMLInputElement} */
      const input = (div.children[1]);
      if (PROFILES[CITATION_MODE].includes(input.name))
        div.classList.remove('disabled');
      else
        div.classList.add('disabled');
    }
  }
  filterInputs();
  el_CitationMode.addEventListener('change', filterInputs);

  // Set default date to today for access date
  const TODAY = new Date();
  el_AccessDate.value = el_AccessDate.max = el_PublishDate.max =
    `${TODAY.getFullYear()}-${TODAY.getMonth() + 1}-${TODAY.getDate()}`;

  // Send arbitrary data
  function submitLister() {
    /** @type {import('../../electron/core/Citation')} */
    const citation = window['sendData']({
      firstName: el_FirstName.value,
      middleName: el_MiddleName.value,
      lastName: el_LastName.value,
      title: el_Title.value,
      publisherName: el_PublisherName.value,
      publishDate: el_PublishDate.value,
      accessDate: el_AccessDate.value,
      url: el_Url.value
    });
    el_PreviewTarget.innerHTML = citation[el_CitationStyle.value];
    el_PreviewTarget.style.display = 'block';
  }
  el_Butt.addEventListener('click', submitLister);
  // Prevent default behavior of form submission
  el_MainForm.addEventListener('submit', event => {
    event.preventDefault();
    submitLister();
  });
});
