import { z } from "zod";

export const RSchema = z.object({
    name: z.string().trim().min(1).max(120, {
        message: "Name must be 120 or less!"
    }),
    email: z.string().trim().min(3, {
        message: "Email is Required"
    }),
    password: z.string().trim().min(6, {
        message: "Must be at least 6 characters."
    })
});

export type RType = z.infer<typeof RSchema>;

export const LSchema = z.object({
    email: z.string().trim().min(3, {
        message: "Email is Required"
    }),
    password: z.string().trim().min(6, {
        message: "Must be at least 6 characters."
    })
});

export type LType = z.infer<typeof LSchema>;



