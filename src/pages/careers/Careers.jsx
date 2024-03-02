import { useLoaderData,Link } from "react-router-dom"

const Careers = () => {
  const careers=useLoaderData()
  return (
    <div className="careers">
      {careers.map(career=>{
        return(
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        )
      })}
    </div>
  )
}

export const careersLoader=async ()=>{
    const data= await fetch("http://localhost:4000/careers")
    if(!data.ok){
      throw Error("Couldn't fetch the Careers")
    }
    return data.json()
}

export default Careers;
