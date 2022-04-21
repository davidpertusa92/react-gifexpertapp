export const getGifs = async (category) => {
  const url = 'https://api.giphy.com/v1/gifs/search?';
  const apiKey = 'sAF7KB1VxxYrnuIbKBFGG74jwDdMubir';

  const response = await fetch(url + new URLSearchParams({
    api_key: apiKey,
    limit: 10,
    q: category
  }));
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => ({ id, title, url: images?.downsized_medium?.url }));

  return gifs;
};