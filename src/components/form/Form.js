import axios from 'axios';


export default function Form(){

  axios
  .post("http://appmurcia_codeigniter.test/rest/reviewbymailbyrestid/1", {
    email: 'mai@mail',
    description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',
    puntuation: 3,
  })
  .then(response => {
    console.log(response);
  });
return(
  <>
  <input/></>
)

}

