const SURVEY_TYPE = 'CLUB';

const PathEnum = {
  API_URL: 'http://localhost:8080', // api url
  START: `/start/${SURVEY_TYPE}`,
  SURVEY: `/survey/${SURVEY_TYPE}`,
  HOME: '/',
  SURVEY_RESULT: `/result/${SURVEY_TYPE}`,
};

export default PathEnum;
