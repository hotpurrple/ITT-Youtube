const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfa7ef1c99msh24a13ae1d9d3313p1064bbjsn5dbe7ce1f9f1',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};
  
  const BASE_URL = `https://youtube-v31.p.rapidapi.com`;
  
  export default function alternativeFetch(uri) {
    //приема динамичен uri, който се закача на BASE_URL и ползва горните options
    return fetch(BASE_URL + uri, options).then((res) => {
      if (!res.ok) {
        //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
        throw new Error(`Something went wrong: ${res.status}`);
      }
      return res.json();
    });
  }
  