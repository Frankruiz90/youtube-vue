import axios from "axios";
/**
 * function initial for call api youtube
 * @param {string} key 
 * @param {string} channelId 
 * @param {number} resForPage 
 */
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
/**
 * function to search video in youtube
 * @param {string} key 
 * @param {string} resForPage 
 * @param {string} search 
 */
export async function searchYoutube(key, resForPage, search) {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&maxResults=${resForPage}&q=${search}`,
    {
      params: {
        key,
        resForPage,
        search,
      },
    }
  );
}
/**
 * function next page
 * @param {string} key 
 * @param {string} resForPage 
 * @param {string} nextPageToken 
 */
export async function newPage(key, resForPage, nextPageToken) {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageToken}&key=${key}&part=snippet&maxResults=${resForPage}`,
    {
      params: {
        key,
        resForPage,
        nextPageToken,
      },
    }
  );
}
/**
 * function preview page
 * @param {seting} key 
 * @param {string} resForPage 
 * @param {seting} prevPageToken 
 */
export async function oldPage(key, resForPage, prevPageToken) {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/search?pageToken=${prevPageToken}&key=${key}&part=snippet&maxResults=${resForPage}`,
    {
      params: {
        key,
        resForPage,
        prevPageToken,
      },
    }
  );
}
