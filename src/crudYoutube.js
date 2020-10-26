import axios from "axios";

export async function connectYoutube(key, channelId, resForPage) {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&channelid=${channelId}&part=snippet,id&order=date&maxResults=${resForPage}`,
    {
      params: {
        key,
        channelId,
        resForPage,
      },
    }
  );
}
