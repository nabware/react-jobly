const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET" && data)
      ? JSON.stringify(data)
      : undefined;


    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();

      if (Array.isArray(error.message)) {
        throw error.message;
      }
      else {
        console.log(error.message);
        throw [error.message];
      }

    }

    return await resp.json();
  }

  // Individual API routes

  /** Takes optional filters and returns array of companies */

  static async getCompanies(filters) {
    if (filters?.nameLike?.length === 0) delete filters.nameLike;

    const res = await this.request(`companies`, filters);

    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);

    return res.company;
  }

  /** Takes optional filters and returns array of jobs */

  static async getJobs(filters) {
    if (filters?.title?.length === 0) delete filters.title;

    const res = await this.request(`jobs`, filters);

    return res.jobs;
  }

  /** Takes jobId and returns job object */

  static async getJob(jobId) {
    const res = await this.request(`jobs/${jobId}`);

    return res.job;
  }

  /** Takes login form data and returns token. */

  static async login(data) {
    const res = await this.request(`auth/token`, data, "POST");

    return res.token;
  }

  /** Takes signup form data and returns token. */

  static async signup(data) {
    const res = await this.request(`auth/register`, data, "POST");

    return res.token;
  }

  /** Takes username and returns user object */

  static async getUser(username) {
    const res = await this.request(`users/${username}`);

    return res.user;
  }

  /** Takes username and profile form data to update user profiles */
  static async updateProfile(username, data) {
    const res = await this.request(`users/${username}`, data, "PATCH");

    return res.user;
  }

    /** Takes username and job id to apply to job */
    static async applyToJob(username, jobId) {
      const res = await this.request(`users/${username}/jobs/${jobId}`, null, "POST");

      return res.applied;
    }

}


export default JoblyApi;
