import PROFILES from './citation-profiles.js';
import * as FORM_INPUT from './dom/form-input.js';
import * as FORM_CONTROLS from './dom/form-controls.js';

document.addEventListener('DOMContentLoaded', () => {
  // Remove unnecessary inputs for selected citation mode
  function filterInputs() {
    /** @type {HTMLDivElement[]} */
    const divs = (Array.from(document.getElementsByClassName('input-entry')));
    const CITATION_MODE = FORM_INPUT.el_CitationMode.value;
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
  FORM_INPUT.el_CitationMode.addEventListener('change', filterInputs);

  // Set default date to today for access date
  const TODAY = new Date();
  FORM_INPUT.el_AccessDate.value =
  FORM_INPUT.el_AccessDate.max =
  FORM_INPUT.el_PublishDate.max =
    `${TODAY.getFullYear()}-${TODAY.getMonth() + 1}-${TODAY.getDate()}`;

  // Send arbitrary data
  function submitLister() {
    /** @type {import('../../electron/core/Citation')} */
    const citation = window['sendData']({
      firstName: FORM_INPUT.el_FirstName.value,
      middleName: FORM_INPUT.el_MiddleName.value,
      lastName: FORM_INPUT.el_LastName.value,
      title: FORM_INPUT.el_Title.value,
      publisherName: FORM_INPUT.el_PublisherName.value,
      publishDate: FORM_INPUT.el_PublishDate.value,
      accessDate: FORM_INPUT.el_AccessDate.value,
      url: FORM_INPUT.el_Url.value
    });
    FORM_CONTROLS.el_PreviewTarget.children[0].innerHTML = citation[FORM_INPUT.el_CitationStyle.value];
    FORM_CONTROLS.el_PreviewTarget.style.display = 'block';
  }
  FORM_CONTROLS.el_Butt.addEventListener('click', submitLister);

  // Prevent default behavior of form submission
  FORM_INPUT.el_MainForm.addEventListener('submit', event => {
    event.preventDefault();
    submitLister();
  });
});
