import axios from "axios";

export const API = {
  getPosts: () => axios.get('/posts.json/'),
  postPost: (data) => axios.post('/posts.json/', data),
  deletePost: (id) => axios.delete(`/posts/${id}.json/`)
}