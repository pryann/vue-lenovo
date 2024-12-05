import axios from 'axios'

const key = 'AIzaSyBcCfGIsv_kk_7XgRlPv41lhD5kIsmPYJ4'

export const defaultParams = {
  part: 'snippet',
  key,
}

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
