import { Form, redirect, useActionData } from "react-router-dom"

function Contact() {
  const data=useActionData()
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data?.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

export const contactAction=async ({request})=>{
  const data= await  request.formData()
  const submission={
    email:data.get("email"),
    message:data.get("message")
  }

  if(submission.message.length < 10){
    return {error:"Message should be more than 10 characters"}
  }
  return redirect("/")
}

export default Contact
