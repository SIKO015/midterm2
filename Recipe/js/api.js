"use strict";

window.ACCESS_POINT = "https://spoonacular.com/food-api/console#Profile"; 

const /** {String} */ API_KEY = 'd342afa1b17542d7850eb44e071824ff';
// const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array 
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const /** {String} */ query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");
 
  const /** {String} */ url = `${ACCESS_POINT}?apiKey=${API_KEY}${query ? `&${query}` : ""}`;

  const /** {Object} */ response = await fetch(url);

  if (response.ok) {
      const data = await response.json();
      console.log(data)
      successCallback(data);
  }
  
}

