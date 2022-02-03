export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/news_one/")
    const data = await res.json()
    return {
      props: {
        data:data
      }
    }
  } 


  export default function LastNew({data}){
    return(
        <>
            <div className="text-center">
                <h1 className="text-center fs-1 text-secondary">Ultima Noticia</h1>
            </div>
        </>
    )


    
}
