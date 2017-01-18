import { schema } from 'normalizr';

const fermentableSchema = new schema.Entity('fermentables', {}, { idAttribute: '_id' });
const fermentableListSchema = [fermentableSchema];

const styleSchema = new schema.Entity('styles', {}, { idAttribute: '_id' });
const styleListSchema = [styleSchema];

export { fermentableSchema, fermentableListSchema, styleListSchema };
