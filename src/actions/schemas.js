import { schema } from 'normalizr';

const fermentableSchema = new schema.Entity('fermentables', {}, { idAttribute: '_id' });

const fermentableListSchema = [fermentableSchema];

export { fermentableSchema, fermentableListSchema };
