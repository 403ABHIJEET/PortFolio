import { PreviewData } from "next";

interface props {
  name: string;
  email: string;
  message: string
}

export default function EmailFormat({ name, email, message }: props) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>Email: {email}</h2>
        <br />
        <p>{message}</p>
    </div>
  )
}