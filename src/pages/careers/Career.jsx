import { useLoaderData, useParams } from "react-router-dom"

const Career = () => {
    // const {id}=useParams()
    const details=useLoaderData()
  return (
    <div className="career-details">
      <h1>Career details for {details.title}</h1>
      <p>Base Salary : {details.salary}</p>
      <p>Based in {details.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, et veniam. Sapiente quos tempora quidem dolorem inventore ipsam officia, odit quod ad neque aliquam vero sequi recusandae a deleniti nesciunt.</p>
      </div>
    </div>
  )
}

export const CareerDetails=async ({params})=>{
    const {id}=params
const res=await fetch("http://localhost:4000/careers/" + id)
if(!res.ok){
    throw Error("Couldn't find the career")
  }
return res.json()
}

export default Career
