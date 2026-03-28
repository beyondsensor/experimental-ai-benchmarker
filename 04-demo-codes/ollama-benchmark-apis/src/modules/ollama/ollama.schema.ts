import { z } from "zod";

/**
 * Base schema for Ollama requests
 */
const BaseOllamaSchema = z.object({
    host: z.string().url().default("http://localhost:11434"),
    model: z.string().min(1, "Model name is required")
});

export const TextGenerationSchema = z.object({
    host: z.string().url().default("http://localhost:11434"),
    model: z.string().min(1, "Model name is required"),
    prompt: z.string().min(1, "Prompt is required"),
    schemaType: z.enum(["user", "scene", "identity"]).default("user")
});

export type TextGenerationRequest = z.infer<typeof TextGenerationSchema>;

export const AnalyzeImageSchema = z.object({
    host: z.string().url().default("http://localhost:11434"),
    model: z.string().min(1, "Model name is required"),
    prompt: z.string().min(1, "Prompt is required"),
    imagePath: z.string().optional(),
    schemaType: z.enum(["user", "scene", "identity"]).default("user")
});

export type AnalyzeImageRequest = z.infer<typeof AnalyzeImageSchema>;

/**
 * Schema for listing models
 */
export const ListModelsSchema = z.object({
    host: z.string().url().default("http://localhost:11434")
});

/**
 * Schema for pulling a model
 */
export const PullModelSchema = BaseOllamaSchema;

/**
 * Schema for deleting a model
 */
export const DeleteModelSchema = BaseOllamaSchema;

/**
 * Schema for generic text generation
 */
export const GenericGenerateSchema = z.object({
    host: z.string().url().default("http://localhost:11434"),
    model: z.string().min(1, "Model name is required"),
    prompt: z.string().min(1, "Prompt is required")
});

/**
 * Schema for generic chat
 */
export const GenericChatSchema = z.object({
    host: z.string().url().default("http://localhost:11434"),
    model: z.string().min(1, "Model name is required"),
    messages: z.array(z.object({
        role: z.enum(["user", "assistant", "system", "tool"]),
        content: z.string()
    })).min(1, "At least one message is required")
});
