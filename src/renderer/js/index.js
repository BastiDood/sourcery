import PROFILES from './citation-profiles.js';
import * as FORM_INPUT from './dom/form-input.js';
import * as FORM_CONTROLS from './dom/form-controls.js';

document.addEventListener('DOMContentLoaded', () => {
  /** @type {import('./components/InputField').InputField[]} */
  const el_inputEntries = (Array.from(document.getElementsByTagName('input-field')));

  // Remove unnecessary inputs for selected citation mode
  function filterInputs() {
    const CITATION_MODE = FORM_INPUT.el_CitationMode.value;
    /** @type {string[]} */
    const REQUIRED_FIELDS = PROFILES[CITATION_MODE];

    // Filter based on whether the fields are required
    for (const inputEntry of el_inputEntries)
      inputEntry.updateDisplay(REQUIRED_FIELDS.includes(inputEntry.id));
  }
  filterInputs();
  FORM_INPUT.el_CitationMode.addEventListener('change', filterInputs);

  // Set default date to today for access date
  // TODO: Encapsulate this functionality inside `InputField`
  const TODAY = new Date();
  const YEAR = TODAY.getFullYear();
  const MONTH = (TODAY.getMonth() + 1).toString().padStart(2, '0');
  const DAY = (TODAY.getDate() + 1).toString().padStart(2, '0');
  FORM_INPUT.el_AccessDate.value =
  FORM_INPUT.el_AccessDate.max =
  FORM_INPUT.el_PublishDate.max =
    `${YEAR}-${MONTH}-${DAY}`;

  // Send arbitrary data
  function submitListener() {
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
  FORM_CONTROLS.el_Butt.addEventListener('click', submitListener);
  FORM_INPUT.el_MainForm.addEventListener('submit', event => event.preventDefault());
  
  // Listen for forwarded `submit` events
  for (const inputEntry of el_inputEntries)
    inputEntry.addEventListener('submit', submitListener);
});
