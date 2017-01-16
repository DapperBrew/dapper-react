import { schema } from 'normalizr';

const fermentableSchema = new schema.Entity('fermentables', {}, { idAttribute: '_id' });
const fermentableListSchema = [fermentableSchema];
// const recipeFermentableListSchema = new schema.Entity('fermentables', {
//   fermentables: [fermentableSchema],
// }, { idAttribute: '_id' });
//
const recipeFermentableListSchema = new schema.Entity('fermentables', {}, { idAttribute: '_id' });

export { fermentableSchema, fermentableListSchema, recipeFermentableListSchema };
