import axios from "axios";

export const API = {
  getPosts: () => axios.get('/posts.json/'),
  postPost: (data) => axios.post('/posts.json/', data)
}