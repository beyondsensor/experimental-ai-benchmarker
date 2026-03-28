import { type Request, type Response } from 'express';
import * as ollamaService from './ollama.service';
import { UserSchema, SceneSchema, IdentitySchema } from '@/shared/models/schemas';
import {
    AnalyzeImageSchema,
    TextGenerationSchema,
    ListModelsSchema,
    PullModelSchema,
    DeleteModelSchema,
    GenericChatSchema,
    GenericGenerateSchema
} from './ollama.schema';
import { z } from 'zod';

/**
 * Helper to handle errors uniformly
 */
const handleError = (res: Response, error: any, defaultMessage: string = "Operation failed") => {
    if (error instanceof z.ZodError) {
        res.status(400).json({
            success: false,
            errors: error.issues
        });
        return;
    }
    res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : defaultMessage
    });
};

export const textGeneration = async (req: Request, res: Response) => {
    try {
        const validatedBody = TextGenerationSchema.parse(req.body);
        const { host, model, prompt, schemaType } = validatedBody;

        let selectedSchema;
        switch (schemaType) {
            case 'user': selectedSchema = UserSchema; break;
            case 'scene': selectedSchema = SceneSchema; break;
            case 'identity': selectedSchema = IdentitySchema; break;
            default: selectedSchema = UserSchema;
        }

        const jsonSchema = JSON.stringify((selectedSchema as any).toJSONSchema());

        const result = await ollamaService.generateWithSchema({
            host,
            model,
            prompt,
            jsonSchema
        });

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        handleError(res, error, "Generation failed");
    }
};

export const analyzeImage = async (req: Request, res: Response) => {
    try {
        const validatedBody = AnalyzeImageSchema.parse(req.body);
        const { host, model, prompt, imagePath, schemaType } = validatedBody;

        let selectedSchema;
        switch (schemaType) {
            case 'user': selectedSchema = UserSchema; break;
            case 'scene': selectedSchema = SceneSchema; break;
            case 'identity': selectedSchema = IdentitySchema; break;
            default: selectedSchema = UserSchema;
        }

        const jsonSchema = JSON.stringify((selectedSchema as any).toJSONSchema());

        const result = await ollamaService.generateWithSchema({
            host,
            model,
            prompt,
            imagePath,
            jsonSchema
        });

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        handleError(res, error, "Analysis failed");
    }
};

export const listModels = async (req: Request, res: Response) => {
    try {
        const { host } = ListModelsSchema.parse(req.query);
        const models = await ollamaService.listModels(host);
        res.json({ success: true, data: models });
    } catch (error) {
        handleError(res, error, "Failed to list models");
    }
};

export const pullModel = async (req: Request, res: Response) => {
    try {
        const { host, model } = PullModelSchema.parse(req.body);
        const result = await ollamaService.pullModel(host, model);
        res.json({ success: true, data: result });
    } catch (error) {
        handleError(res, error, "Failed to pull model");
    }
};

export const deleteModel = async (req: Request, res: Response) => {
    try {
        const { host, model } = DeleteModelSchema.parse(req.body);
        const result = await ollamaService.deleteModel(host, model);
        res.json({ success: true, data: result });
    } catch (error) {
        handleError(res, error, "Failed to delete model");
    }
};

export const chat = async (req: Request, res: Response) => {
    try {
        const { host, model, messages } = GenericChatSchema.parse(req.body);
        const result = await ollamaService.chat(host, model, messages);
        res.json({ success: true, data: result });
    } catch (error) {
        handleError(res, error, "Chat failed");
    }
};

export const generateText = async (req: Request, res: Response) => {
    try {
        const { host, model, prompt } = GenericGenerateSchema.parse(req.body);
        const result = await ollamaService.generate(host, model, prompt);
        res.json({ success: true, data: result });
    } catch (error) {
        handleError(res, error, "Generation failed");
    }
};

export const getSchemas = (req: Request, res: Response) => {
    res.json({
        user: UserSchema.toJSONSchema(),
        scene: SceneSchema.toJSONSchema(),
        identity: IdentitySchema.toJSONSchema()
    });
};
