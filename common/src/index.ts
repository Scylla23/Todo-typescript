import { z } from "zod";
export const signupInput = z.object({
    username: z.string().min(1).max(20),
    password: z.string().min(8).max(20)
})
//console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;
