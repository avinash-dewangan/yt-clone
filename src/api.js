import axios from "axios";

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:'AIzaSyA-3PffFfiREfoWgNHkn2MNW0aTNB_YpAw'
    }
})

export default request;