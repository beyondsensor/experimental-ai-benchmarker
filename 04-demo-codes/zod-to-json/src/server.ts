/** 
 * A Simple Script to Convert Zod Schema to JSON Schema
 * 
 * @author: Kien Truong
 * @date: 2026-03-29
 */
import { z } from "zod";

const UserSchema = z.object({
    username: z.string().min(3).describe("The user's unique handle"),
    age: z.number().int().positive().optional(),
    status: z.enum(["active", "inactive"]).default("active")
});


const SceneSchema = z.object({
    // The enum ensures the model picks only from these three options
    location: z.enum(["indoors", "outdoors", "not applicable"]),
    confidence: z.number().describe("Certainty from 0 to 1"),
    reasoning: z.string().describe("A brief explanation of why this classification was chosen")
});

const IdentitySchema = z.object({
    document_type: z.enum(["Passport", "National ID", "Drivers License", "Other"]),
    issuing_country: z.string().describe("The 3-letter ISO country code (e.g., USA, GBR, FRA)").optional(),
    document_number: z.string().describe("The unique alphanumeric ID or Passport number").optional(),

    // Personal Details
    full_name: z.object({
        first_names: z.string().describe("All given names exactly as shown").optional(),
        last_name: z.string().describe("The primary surname or family name").optional()
    }),

    // Dates (validated as ISO format strings)
    date_of_birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("YYYY-MM-DD format"),
    expiry_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).describe("YYYY-MM-DD format"),

    gender: z.enum(["M", "F", "X", "Unknown"]),

    // Machine Readable Zone (MRZ) - very useful for validation if visible
    mrz_lines: z.array(z.string()).optional().describe("The 2 or 3 lines of text at the bottom if present")
});

console.log("User Schema", UserSchema.toJSONSchema);
console.log();
console.log("Identity Schema", IdentitySchema.toJSONSchema());
console.log();
console.log("Scene Schema", SceneSchema.toJSONSchema());