import axios from "axios";
import { ENDPOINTS } from "./api/endpoints";

export const getRandomQuote = async () => {
  const res = await axios.get(ENDPOINTS.RANDOM_QUOTE);
  return `"${res.data.quote}" - ${res.data.author}`;
};
