import axios from "axios";

export const getGifs = async (category) => {
  const key = 'Mrholzmz9aWyuJk4elSF41TXsPEq6ndv',
        url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=5`,
        rawGifs = await axios.get(url),
        gifs = rawGifs.data.data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
        }))
  return gifs
};