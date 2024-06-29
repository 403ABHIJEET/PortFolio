import EmailFormat from "@/email/emailFormat"
import { resend } from "@/lib/resend"

interface ApiResponse {
    success: boolean,
    message: string
}

export async function SendEmail(name: string, email: string, message: string): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'abhijeet8745@gmail.com',
            subject: 'Email from Portfolio',
            react: EmailFormat({name: name, email: email, message: message})
        })
        return ({
            success: true,
            message: "Email sent successfully"
        })
    } catch (error) {
        console.log("Failed to send email", error)
        return ({
            success: false,
            message: "Failed to send email"
        })
    }
}
