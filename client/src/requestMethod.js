import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTY4ZjgwNWRlMWUxZGUwZTRlNDZiNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MjY2Njg2MCwiZXhwIjoxNjQzNTMwODYwfQ.9wf_rDLg5U9rOPwRH_JfhyKXeD0otmuRk-NnUXzw_Go"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token : `Bearer ${TOKEN}`}
})