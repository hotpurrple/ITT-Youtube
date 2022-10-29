const keys = [
    "291c8adc40msh2e2fa55f0195de1p13c8c0jsn6e2392beeef29",
    "4810b08f52msh8dc3e3709d6b9aap174b4ajsn1bab90c421fa",
    "33506328d3msh98631daf5531085p1fbbf1jsn0f525a5e83a3",
    "9d8dda8991mshcabe783f2d52885p1ed4e1jsn7ad52d926009",
    "09970a171cmsh8b55fc94efac597p1ef987jsne768ecca4f1b",
    "8ab3b806b9mshb0755c8bb2051aep167fe0jsnce5febdf705f",
    "9dd777b31amsh28d11da5c2da2dfp1d637bjsn2822c09bd916",
    "db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",
    "3c09e864dcmsh66ecfe6afa89732p1ffd6bjsn9e7e12565695"
]


const options = {
  method: "GET",
  headers: {
    //kiril keys - idk which ones work
    //alternative API key -
    "X-RapidAPI-Key": "cfa7ef1c99msh24a13ae1d9d3313p1064bbjsn5dbe7ce1f9f1",
    // "X-RapidAPI-Key": "291c8adc40msh2e2fa55f0195de1p13c8c0jsn6e2392beeef29",
    // "X-RapidAPI-Key": "4810b08f52msh8dc3e3709d6b9aap174b4ajsn1bab90c421fa",
    // "X-RapidAPI-Key": "33506328d3msh98631daf5531085p1fbbf1jsn0f525a5e83a3",
    // "X-RapidAPI-Key": "9d8dda8991mshcabe783f2d52885p1ed4e1jsn7ad52d926009",
    // "X-RapidAPI-Key": "09970a171cmsh8b55fc94efac597p1ef987jsne768ecca4f1b",
    // "X-RapidAPI-Key": "8ab3b806b9mshb0755c8bb2051aep167fe0jsnce5febdf705f",

    //dilqn keys
    // "X-RapidAPI-Key": "9dd777b31amsh28d11da5c2da2dfp1d637bjsn2822c09bd916",
    // "X-RapidAPI-Key": "db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",
    // "X-RapidAPI-Key": "3c09e864dcmsh66ecfe6afa89732p1ffd6bjsn9e7e12565695",

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};


const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

export default async function fetchFromApi(uri) {
    const result = await fetcher(uri)
    return result.json()
}

function fetcher(uri) {
  //приема динамичен uri, който се закача на BASE_URL и ползва горните options
  return fetch(BASE_URL + uri, options).then((res) => {
    if (!res.ok) {
      //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
      throw new Error(`Error: ${res.status}. Message: ${res.message}`);
    }
    return res
  });
}
