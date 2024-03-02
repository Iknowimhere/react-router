import { useRouteError,Link } from "react-router-dom"

const CareersError = () => {
    const error=useRouteError()
  return (
    <div className="error">
        <h1>Error</h1>
        <p>{error.message}</p>
        <Link to='/'>Get back to home</Link>
    </div>
  )
}

export default CareersError
