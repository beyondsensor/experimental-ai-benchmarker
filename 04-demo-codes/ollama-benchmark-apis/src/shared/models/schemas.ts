import { z } from "zod";

export const UserSchema = z.object({
    username: z.string().min(3).describe("The user's unique handle"),
    age: z.number().int().positive().optional(),
    status: z.enum(["active", "inactive"]).default("active")
});

export const SceneSchema = z.object({
    location: z.enum(["indoors", "outdoors", "not applicable"]),
    confidence: z.number().describe("Certainty from 0 to 1"),
    reasoning: z.string().describe("A brief explanation of why this classification was chosen")
});

export const IdentitySchema = z.object({
    document_type: z.enum(["Passport", "National ID", "Drivers License", "Other"]),
    issuing_country: z.string().describe("The 3-letter ISO country code (e.g., USA, GBR, FRA)").optional(),
    document_number: z.string().describe("The unique alphanumeric ID or Passport number").optional(),

    full_name: z.object({
        first_names: z.string().describe("All given names exactly as shown").optional(),
        last_name: z.string().describe("The primary surname or family name").optional()
    }),

    date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("YYYY-MM-DD format"),
    expiry_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("YYYY-MM-DD format"),

    gender: z.enum(["M", "F", "X", "Unknown"]),

    mrz_lines: z.array(z.string()).optional().describe("The 2 or 3 lines of text at the bottom if present")
});
