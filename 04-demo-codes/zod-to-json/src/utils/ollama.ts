import { Ollama } from 'ollama';
import { isValidJsonSchema } from './ajv';

export type GenerateRequest = {
    host: string;
    model: string;
    prompt: string;
    imagePath: string;
    jsonSchema: string;
}

/**
 * Generate using Ollama with JSON Schema
 * @param param0 Generation Request and Test Plan
 * @returns 
 */
export async function generateWithSchema({ host, imagePath, jsonSchema, model, prompt }: GenerateRequest) {

    if (!isValidJsonSchema(jsonSchema)) {
        throw new Error("Invalid JSON Schema");
    }
    const ollama = new Ollama({ host });
    /// Generate the Response from Ollama 
    const response = await ollama.generate({
        model: model,
        prompt: prompt,
        images: [imagePath],
        format: jsonSchema,
        options: {
            temperature: 0 // Keep it strict
        }
    });

    try {
        const parsed = JSON.parse(response.response);
        return parsed;
    } catch (err) {
        throw new Error("Failed to parse JSON response");
    }
}