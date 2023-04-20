export const server = "http://127.0.0.1:8000";

const apiList = {
  login: `${server}/auth/login/`,
  signup: `${server}/auth/register/`,
  logout: `${server}/auth/logout/`,
  getJobs: `${server}/offer/getAgencyOffers/`,
  getWorker: `${server}/stats/getWorker/`,
  getAgency: `${server}/stats/getAgency/`,
  searchJob: `${server}/offer/searchOffers/`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/offer/createOffer/`,
  applicationsCandidate: `${server}/offer/applicate/`,
  addExLink: `${server}/stats/setStats/`,
  addCompetenze: `${server}/stats/setCompetences/`,
  applicationsSave: `${server}/offer/saveOffer/`,
  getSavedJob: `${server}/offer/getSavedOffers/`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;