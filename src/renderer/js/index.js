document.addEventListener('DOMContentLoaded', () => {
  // Set necessary variables for each input element
  /** @type {HTMLFormElement} */
  const el_Form = (document.getElementById('main-form'));
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
  /** @type {HTMLButtonElement} */
  const el_Butt = (document.getElementById('submitButt'));
  /** @type {HTMLDivElement} */
  const el_PreviewTarget = (document.getElementById('citation-preview-target'));

  // Prevent default behavior of form submission
  el_Form.addEventListener('submit', event => {
    event.preventDefault();
  });

  // Set default date to today for access date
  const TODAY = new Date();
  el_AccessDate.value = el_AccessDate.max = el_PublishDate.max =
    `${TODAY.getFullYear()}-${TODAY.getMonth() + 1}-${TODAY.getDate()}`;

  // Send data
  function submitLister() {
    /** @type {import('../../electron/core/Citation')} */
    const citation = window['sendData']({
      firstName: el_FirstName.value,
      middleName: el_MiddleName.value,
      lastName: el_LastName.value,
      title: el_Title.value,
      publishDate: el_PublishDate.value,
      accessDate: el_AccessDate.value,
      url: el_Url.value
    });
    el_PreviewTarget.innerHTML = citation[el_CitationStyle.value];
  }
  el_Butt.addEventListener('click', submitLister);
});
