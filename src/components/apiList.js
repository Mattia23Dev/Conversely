export const server = process.env.SERVER_URL || "http://82.55.115.103:8001";
//https://hr-production-d58f.up.railway.app

//http://127.0.0.1:8000

const apiList = {
  login: `${server}/auth/login/`,
  signup: `${server}/auth/register/`,
  logout: `${server}/auth/logout/`,
  getJobs: `${server}/offer/getAgencyOffers/`,
  searchJob: `${server}/offer/searchOffers/`,
  getOfferApplications: `${server}/offer/getOfferApplications/`,
  getAllWorkers: `${server}/stats/getWorkers/`,
  jobs: `${server}/offer/createOffer/`,
  applicationsCandidate: `${server}/offer/applicate/`,
  applicationsSave: `${server}/offer/saveOffer/`,
  getSavedJob: `${server}/offer/getSavedOffers/`,
  getWorker: `${server}/stats/getWorker/`,
  getAgency: `${server}/stats/getAgency/`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  addExLink: `${server}/stats/setStats/`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;