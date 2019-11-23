const COMMON_PROFILE = [
  'firstName',
  'middleName',
  'lastName',
  'title',
  'publishDate',
  'accessDate'
];

const SPECIAL_PROFILE = [ 'url' ];

const PROFILES = {
  JOURNAL_PERIODICAL_ARTICLE: [
    ...COMMON_PROFILE,
    'publisherName',
    'publisherCountry',
    'publisherStateProvince',
    'publisherCity',
    'url',
    'doi',
    'volume',
    'issue',
    'startPage',
    'endPage'
  ],
  WEB_RESOURCE: [
    ...COMMON_PROFILE,
    'publisherName',
    'url',
    'doi'
  ],
  RAPPLER: SPECIAL_PROFILE,
  SPOTIFY: SPECIAL_PROFILE,
  GUARDIAN: SPECIAL_PROFILE,
  YOUTUBE: SPECIAL_PROFILE
};

// TODO: Adjust data structure to include alternative name
// { name: 'author', alt: 'Artist' }
export default PROFILES;
