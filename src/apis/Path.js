// let DOMAIN = 'https://localhost:44315/';
let DOMAIN = "http://cpvdev/apiCarRental/";
const refreshTokenUrl = `${DOMAIN}account/refresh-token`;

let API = DOMAIN;
let IMAGE = DOMAIN + "upload/";
export const Path = {
  API,
  IMAGE,
  Banner: IMAGE + "banner/",
  Product: IMAGE + "product/",
  refreshTokenUrl,
};
