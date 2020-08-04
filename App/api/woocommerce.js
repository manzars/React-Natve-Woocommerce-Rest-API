import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_b6363cba510f3e51166d5bc3673bb305fb0b1e27";
const cs = "cs_e3fbf07f862e369f3dbec44a181851a26a1e7aec";
const baseURL = "http://192.168.1.105:10003/wp-json";

const Woocommerce = {
  getCustomers: () => {
    return makeRequest("/wc/v3/customers");
  },
  postCustomers: (data) => {
    return makeRequest("/wc/v3/customers", "POST", data);
  },
};

function makeRequest(endpoint, method = "GET", data = null) {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
  };

  if (method === "POST") {
    console.log("manzar", data);
    return axios.post(requestData.url, data, {
      params: oauth.authorize(requestData),
    });
  }

  //   console.log(jQuery);
  //   const requestHTTP =
  //     requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

  return axios.get(requestData.url, { params: oauth.authorize(requestData) });
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs,
    },
    signature_method: "HMAC-SHA1",
    hash_function: function (base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    },
  });
}

export default Woocommerce;
