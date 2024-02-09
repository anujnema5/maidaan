'use server'

import { loginSchema } from "@/schemas"
import * as z from "zod"

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values)

    if(!validatedFields.success) {
        return {error : "Invalid fields!!"}
    }

    console.log({success: "Email sent!"});
    return {success: "Email sent!"}
}