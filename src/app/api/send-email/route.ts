import { SendEmail } from "@/sendEmail/sendEmail"

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()
        const response = await SendEmail(name, email, message)
        if(!response.success) return Response.json({
            success: false,
            message: "Failed to send email"
        }, {status: 500})
        return Response.json({
            success: true,
            message: "Email sent successfuly"
        }, {status: 200})
    } catch (error) {
        console.log("Something went wront", error)
        return Response.json({
            success: false,
            message: "Something went worong"
        }, {status: 501})
    }
}