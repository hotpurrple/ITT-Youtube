const options = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",

    //kiril keys - idk which ones work
    //alternative API key -
    "X-RapidAPI-Key": "cfa7ef1c99msh24a13ae1d9d3313p1064bbjsn5dbe7ce1f9f1",
    // "X-RapidAPI-Key": "291c8adc40msh2e2fa55f0195de1p13c8c0jsn6e2392beeef29",
    // "X-RapidAPI-Key": "4810b08f52msh8dc3e3709d6b9aap174b4ajsn1bab90c421fa",
    // "X-RapidAPI-Key": "33506328d3msh98631daf5531085p1fbbf1jsn0f525a5e83a3",
    //dilqn keys
    // "X-RapidAPI-Key": "9dd777b31amsh28d11da5c2da2dfp1d637bjsn2822c09bd916", //"db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

export default function fetchFromApi(uri) {
  //приема динамичен uri, който се закача на BASE_URL и ползва горните options
  return fetch(BASE_URL + uri, options).then((res) => {
    if (!res.ok) {
      //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
      throw new Error(`Error: ${res.status}. Message: ${res.message}`);
    }
    return res.json();
  });
}
