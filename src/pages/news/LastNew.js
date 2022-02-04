import { useEffect, useState } from "react";

// export async function getStaticProps() {
//   const res = await fetch("http://appmurcia_codeigniter.test/rest/news_one/")
//   const last = await res.json()
//   return {
//     props: {
//       last
//   }
//   } 
// }

export default function LastNew({last}){
  let [title, setTitle] = useState(null)
    useEffect(async () => {
    await fetch("http://appmurcia_codeigniter.test/rest/news_one")
      .then((response) => response.json())
      .then((data) => setTitle(data.title))      
      .then((data) => console.log(data));
  });

  return(
      <>
          <div className="text-center">
              <h1 className="text-center fs-1 text-secondary">Ultima Hora</h1>
              <h4>{title}</h4>
          </div>
      </>
  )  
}
