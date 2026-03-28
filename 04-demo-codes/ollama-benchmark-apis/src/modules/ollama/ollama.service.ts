import { Ollama } from 'ollama';
import { isValidJsonSchema } from '@/shared/utils/ajv';

export type GenerateRequest = {
    host: string;
    model: string;
    prompt: string;
    imagePath?: string | undefined;
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

/**
 * List local models
 */
export async function listModels(host: string) {
    const ollama = new Ollama({ host });
    const response = await ollama.list();
    return response.models;
}

/**
 * Pull a model
 */
export async function pullModel(host: string, model: string) {
    const ollama = new Ollama({ host });
    const response = await ollama.pull({ model });
    return response;
}

/**
 * Delete a model
 */
export async function deleteModel(host: string, model: string) {
    const ollama = new Ollama({ host });
    await ollama.delete({ model });
    return { success: true, message: `Model ${model} deleted` };
}

/**
 * Generic text generation (no schema)
 */
export async function generate(host: string, model: string, prompt: string) {
    const ollama = new Ollama({ host });
    const response = await ollama.generate({
        model,
        prompt
    });
    return response;
}

/**
 * Generic chat
 */
export async function chat(host: string, model: string, messages: any[]) {
    const ollama = new Ollama({ host });
    const response = await ollama.chat({
        model,
        messages
    });
    return response;
}
