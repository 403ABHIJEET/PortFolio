import { PreviewData } from "next";

interface props {
  name: string;
  email: string;
  message: string
}

export default function EmailFormat({ name, email, message }: props) {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <h2>Message:</h2>
        <p>{message}</p>
    </div>
  )
}