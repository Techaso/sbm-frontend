import apiClient from "./api/axios";
import { ENDPOINTS } from "./api/endpoints";

export const getAllPosts = () => {
  return apiClient.get(ENDPOINTS.POSTS);
};

export const getPostById = (id) => {
  return apiClient.get(ENDPOINTS.POST_DETAIL(id));
};

export const createPost = (postData) => {
  return apiClient.post(ENDPOINTS.POSTS, postData);
};

export const updatePost = (id, postData) => {
  return apiClient.put(ENDPOINTS.POST_DETAIL(id), postData);
};

export const deletePost = (id) => {
  return apiClient.delete(ENDPOINTS.POST_DETAIL(id));
};
