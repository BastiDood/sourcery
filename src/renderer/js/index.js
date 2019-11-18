document.addEventListener('DOMContentLoaded', () => {
  // Set necessary variables for each input element
  /** @type {HTMLFormElement} */
  const el_Form = (document.getElementById('main-form'));
  /** @type {HTMLSelectElement} */
  const el_CitationStyle = (document.getElementById('citation-style'));
  /** @type {HTMLSelectElement} */
  const el_CitationMode = (document.getElementById('citation-mode'));

  // Prevent default behavior of form submission
  el_Form.addEventListener('submit', event => {
    event.preventDefault();
  });

  /** @type {HTMLInputElement} */
  const firstName = (document.getElementById('firstName'));
  /** @type {HTMLInputElement} */
  const middleName = (document.getElementById('middleName'));
  /** @type {HTMLInputElement} */
  const lastName = (document.getElementById('lastName'));
  /** @type {HTMLInputElement} */
  const title = (document.getElementById('title'));
  /** @type {HTMLInputElement} */
  const publishDate = (document.getElementById('publishDate'));
  /** @type {HTMLInputElement} */
  const accessDate = (document.getElementById('accessDate'));
  /** @type {HTMLInputElement} */
  const url = (document.getElementById('url'));
  /** @type {HTMLButtonElement} */
  const butt = (document.getElementById('submitButt'));
  /** @type {HTMLDivElement} */
  const target = (document.getElementById('citation-target'));

  // Set default date to today for access date
  const today = new Date();
  accessDate.value = accessDate.max = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  // Send data
  function submitLister() {
    /** @type {import('../../electron/core/Citation')} */
    const citation = window['sendData']({
      firstName: firstName.value,
      middleName: middleName.value,
      lastName: lastName.value,
      title: title.value,
      publishDate: publishDate.value,
      accessDate: accessDate.value,
      url: url.value
    });
    target.innerHTML = citation.APA;
  }
  butt.addEventListener('click', submitLister);
});
