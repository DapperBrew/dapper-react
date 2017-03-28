import { schema } from 'normalizr';

const recipeSchema = new schema.Entity('recipes', [], { idAttribute: '_id' });

// eslint-disable-next-line import/prefer-default-export
export const recipeListSchema = [recipeSchema];
