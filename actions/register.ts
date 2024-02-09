'use server'

import { registerSchema } from "@/schemas"
import * as z from "zod"

export const register = async (values: z.infer<typeof registerSchema>) => {
    const validatedFields = registerSchema.safeParse(values)

    if(!validatedFields.success) {
        return {error : "Invalid fields!!"}
    }

    console.log({success: "Email sent!"});
    return {success: "Email sent!"}
}