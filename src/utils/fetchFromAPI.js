const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9dd777b31amsh28d11da5c2da2dfp1d637bjsn2822c09bd916", //"db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",
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
