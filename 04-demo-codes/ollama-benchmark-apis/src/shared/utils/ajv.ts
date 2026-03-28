import Ajv from "ajv";

const ajv = new Ajv();

/**
 * Validates if a string is a valid JSON Schema.
 * @param schemaString The string from your database
 */
export function isValidJsonSchema(schemaString: string): { valid: boolean; error?: string } {
    try {
        const schemaObject = JSON.parse(schemaString);
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
