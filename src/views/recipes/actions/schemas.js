import { schema } from 'normalizr';

const recipeSchema = new schema.Entity('recipes', [], { idAttribute: '_id' });
export const recipeListSchema = [recipeSchema];
