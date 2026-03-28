import { UserSchema, SceneSchema, IdentitySchema } from '../models/schemas';
import {
    AnalyzeImageSchema,
    TextGenerationSchema,
    ListModelsSchema,
    PullModelSchema,
    DeleteModelSchema,
    GenericChatSchema,
    GenericGenerateSchema
} from '../../modules/ollama/ollama.schema';

/**
 * Generates the OpenAPI 3.0.0 specification for the project.
 */
export const generateSwaggerSpec = () => {
    return {
        openapi: '3.0.0',
        info: {
            title: 'Ollama Benchmark API',
            version: '1.0.0',
            description: 'Full interface for Ollama model management and structured generation.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local development server',
            },
        ],
        paths: {
            '/api/status': {
                get: {
                    summary: 'Check API status',
                    tags: ['System'],
                    responses: {
                        200: {
                            description: 'API is healthy',
                            content: { 'application/json': { schema: { type: 'object', properties: { message: { type: 'string' } } } } },
                        },
                    },
                },
            },
            '/api/ollama/models': {
                get: {
                    summary: 'List local models',
                    tags: ['Ollama Management'],
                    parameters: [
                        { name: 'host', in: 'query', schema: { type: 'string', default: 'http://localhost:11434' } },
                    ],
                    responses: {
                        200: { description: 'List of models' },
                    },
                },
            },
            '/api/ollama/pull': {
                post: {
                    summary: 'Pull a model',
                    tags: ['Ollama Management'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/PullModelRequest' } } } },
                    responses: { 200: { description: 'Model pull started' } },
                },
            },
            '/api/ollama/delete': {
                post: {
                    summary: 'Delete a model',
                    tags: ['Ollama Management'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/DeleteModelRequest' } } } },
                    responses: { 200: { description: 'Model deleted' } },
                },
            },
            '/api/ollama/analyze-image': {
                post: {
                    summary: 'Analyze image (Schema-based)',
                    tags: ['Ollama Generation'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/AnalyzeImageRequest' } } } },
                    responses: { 200: { description: 'Success' } },
                },
            },
            '/api/ollama/generate-schema': {
                post: {
                    summary: 'Generate text (Schema-based)',
                    tags: ['Ollama Generation'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/TextGenerationRequest' } } } },
                    responses: { 200: { description: 'Success' } },
                },
            },
            '/api/ollama/generate': {
                post: {
                    summary: 'Generic text generation',
                    tags: ['Ollama Generation'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/GenericGenerateRequest' } } } },
                    responses: { 200: { description: 'Success' } },
                },
            },
            '/api/ollama/chat': {
                post: {
                    summary: 'Generic chat',
                    tags: ['Ollama Generation'],
                    requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/GenericChatRequest' } } } },
                    responses: { 200: { description: 'Success' } },
                },
            },
            '/api/ollama/schemas': {
                get: {
                    summary: 'Get JSON schemas',
                    tags: ['Utilities'],
                    responses: { 200: { description: 'Schemas list' } },
                },
            },
        },
        components: {
            schemas: {
                User: (UserSchema as any).toJSONSchema(),
                Scene: (SceneSchema as any).toJSONSchema(),
                Identity: (IdentitySchema as any).toJSONSchema(),
                AnalyzeImageRequest: (AnalyzeImageSchema as any).toJSONSchema(),
                TextGenerationRequest: (TextGenerationSchema as any).toJSONSchema(),
                ListModelsRequest: (ListModelsSchema as any).toJSONSchema(),
                PullModelRequest: (PullModelSchema as any).toJSONSchema(),
                DeleteModelRequest: (DeleteModelSchema as any).toJSONSchema(),
                GenericGenerateRequest: (GenericGenerateSchema as any).toJSONSchema(),
                GenericChatRequest: (GenericChatSchema as any).toJSONSchema(),
            },
        },
    };
};
