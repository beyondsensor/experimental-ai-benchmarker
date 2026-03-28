import { Ollama } from 'ollama';
import { isValidJsonSchema } from '@/shared/utils/ajv';

export type GenerateRequest = {
    host: string;
    model: string;
    prompt: string;
    imagePath?: string;
    jsonSchema: string;
}

/**
 * Generate using Ollama with JSON Schema
 */
export async function generateWithSchema({ host, imagePath, jsonSchema, model, prompt }: GenerateRequest) {

    const validation = isValidJsonSchema(jsonSchema);
    if (!validation.valid) {
        throw new Error(`Invalid JSON Schema: ${validation.error}`);
    }
    
    const ollama = new Ollama({ host });
    
    const response = await ollama.generate({
        model: model,
        prompt: prompt,
        images: imagePath ? [imagePath] : [],
        format: JSON.parse(jsonSchema),
        options: {
            temperature: 0
        }
    });

    try {
        const parsed = JSON.parse(response.response);
        return parsed;
    } catch (err) {
        throw new Error("Failed to parse JSON response");
    }
}
