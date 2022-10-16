const options = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "db5e890b89msh9e5aa2e53caf0f8p1d4dd0jsn5dd31367be36",
    
    //alternative API key - 
    // "X-RapidAPI-Key": "cfa7ef1c99msh24a13ae1d9d3313p1064bbjsn5dbe7ce1f9f1",
    "X-RapidAPI-Key": "291c8adc40msh2e2fa55f0195de1p13c8c0jsn62392beeef29",

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",

    
  },
};


const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

export default function fetchFromApi(uri) {
  //приема динамичен uri, който се закача на BASE_URL и ползва горните options
  return fetch(BASE_URL + uri, options).then((res) => {
    if (!res.ok) {
      //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  });
}
