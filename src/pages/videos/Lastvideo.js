import YouTube from "react-youtube";

const lastStyles = {
    marginTop:'125px',
    height: '450px',
    width:'800px'
  
    };
    

export async function getStaticProps() {
    const res = await fetch("http://appmurcia_codeigniter.test/rest/videos_one/")
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } 


  export default function LastVideo({data}){
    return(
        <>
            <div className="text-center">
                <h1 className="text-center fs-1 text-secondary">Ultimo Video</h1>
            </div>
            <div className='mx-auto'>
                <YouTube style={lastStyles}></YouTube>
            </div>
        </>
    )


    
}
