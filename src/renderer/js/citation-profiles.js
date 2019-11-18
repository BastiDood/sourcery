const COMMON_PROFILE = [
  'firstName',
  'middleName',
  'lastName',
  'title',
  'publishDate',
  'accessDate'
];

const PROFILES = {
  WEB_RESOURCE: [
    ...COMMON_PROFILE,
    'publisherName',
    'url',
    'doi'
  ]
};

export default PROFILES;
