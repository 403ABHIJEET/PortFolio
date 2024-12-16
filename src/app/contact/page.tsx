"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alertbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function SignupFormDemo() {
    const {data: session } = useSession()

    const [senderEmail, setSenderEmail] = useState('')

    useEffect(() => {
        setSenderEmail(session?.user?.email ?? '')
        setFormValues((prevValues) => ({
            ...prevValues, 
            email: senderEmail, 
        }));
    }, [session])

    const { toast } = useToast()

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleTextchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            await axios.post(`/api/send-email`, {
                name: formValues.name, email: formValues.email, message: formValues.message
            })
            toast({
                title: "Email sent successfuly"
            })
        } catch (error) {
            toast({
                title: "Failed to sent email",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
    };

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
        <div className="flex flex-row-reverse px-5 pt-5">
            {
                !session ? (
                    <Button className="p-2 bg-white hover:bg-slate-300 rounded-md text-black px-4" onClick={() => signIn('google')} >Login</Button>
                ) : (
                    <div className="flex gap-3 justify-center items-center">
                        <Button className="p-2 bg-red-500 hover:bg-red-700 rounded-md text-white px-4" onClick={() => signOut()} >
                            Logout
                        </Button>
                        <Avatar>
                            <AvatarImage src={session.user?.image || ""} />
                            <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                    </div>
                )
            }
        </div>
        <div className=" max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black mt-32 border-2 border-white-1/2">
            <h2 className="font-bold text-xl text-white text-center">
                Contact With Us Via Email
            </h2>
            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Your Name:</Label>
                    <Input id="name" name="name" type="text" value={formValues.name} onChange={handleChange} required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Your Email</Label>
                    <Input disabled={session ? true : false} id="email" name="email" type="email" value={session ? senderEmail : formValues.email} onChange={handleChange} required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Type Your Message Here!</Label>
                    <Textarea 
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleTextchange}
                        className="h-[200px]"
                        />
                </LabelInputContainer>
                {
                    isLoading ? (
                        <button
                        disabled
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        >
                            Wait
                            <BottomGradient />
                        </button>
                    ) : (
                        session ? (
                            <button
                                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                            >
                                Send &rarr;
                            <BottomGradient />
                        </button>
                        ) : (
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <div>
                                        <div
                                            className="flex items-center hover:cursor-pointer justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                        >
                                            Send &rarr;
                                        </div>
                                        <BottomGradient />
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>You need to login before sending message</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Ok!</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )
                    )
                }
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
