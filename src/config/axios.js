import axios from "axios";

const axiosFetch = axios.create({
    baseURL:"http://appmurcia_codeigniter.test/rest/",
    headers:{
        "Content-type": "application/json"
    }
})