import axios from 'axios';

export const lyricsService = {
  async findLyrics(term) {
    const res = await axios(`https://api.lyrics.ovh/suggest/${term}`);
    return res.data;
  },

  findLyric(urlEnc) {
    return axios(urlEnc);
  }
};