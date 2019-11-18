const COMMON_PROFILE = [
  'firstName',
  'middleName',
  'lastName',
  'title',
  'publishDate',
  'accessDate'
];

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
  ]
};

export default PROFILES;
