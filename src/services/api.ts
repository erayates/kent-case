import { API_BASEURL } from "@/lib/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});


