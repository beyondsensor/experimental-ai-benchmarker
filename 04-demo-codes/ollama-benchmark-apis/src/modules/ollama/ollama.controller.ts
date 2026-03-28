import { type Request, type Response } from 'express';
import * as ollamaService from './ollama.service';
import { UserSchema, SceneSchema, IdentitySchema } from '@/shared/models/schemas';

export const testGeneration = async (req: Request, res: Response) => {
    try {
        const { host, model, prompt, imagePath, schemaType } = req.body;

        let selectedSchema;
        switch (schemaType) {
            case 'user': selectedSchema = UserSchema; break;
            case 'scene': selectedSchema = SceneSchema; break;
            case 'identity': selectedSchema = IdentitySchema; break;
            default: selectedSchema = UserSchema;
        }

        const jsonSchema = JSON.stringify((selectedSchema as any).toJSONSchema());

        const result = await ollamaService.generateWithSchema({
            host: host || 'http://localhost:11434',
            model: model || 'llama3',
            prompt: prompt || 'Generate a random user',
            imagePath,
            jsonSchema
        });

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : "Generation failed"
        });
    }
};

export const getSchemas = (req: Request, res: Response) => {
    res.json({
        user: UserSchema.toJSONSchema(),
        scene: SceneSchema.toJSONSchema(),
        identity: IdentitySchema.toJSONSchema()
    });
};
