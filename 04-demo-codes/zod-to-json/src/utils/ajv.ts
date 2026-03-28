import Ajv from "ajv";

// Create an Ajv instance
const ajv = new Ajv();

/**
 * Validates if a string is a valid JSON Schema.
 * @param schemaString The string from your database
 */
export function isValidJsonSchema(schemaString: string): { valid: boolean; error?: string } {
    try {
        // 1. Ensure it's valid JSON first
        const schemaObject = JSON.parse(schemaString);

        // 2. Use Ajv to validate the structure against the JSON Schema spec
        const isSchemaStructureValid = ajv.validateSchema(schemaObject);

        if (!isSchemaStructureValid) {
            return {
                valid: false,
                error: ajv.errorsText(ajv.errors)
            };
        }

        return { valid: true };
    } catch (e) {
        return {
            valid: false,
            error: e instanceof Error ? e.message : "Invalid JSON format"
        };
    }
}