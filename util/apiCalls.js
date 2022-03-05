import axios from "axios"

const  BASE_URL = "https://workout-tracker-amber.vercel.app/api/";

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})