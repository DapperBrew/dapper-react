import { schema } from 'normalizr';

const fermentableSchema = new schema.Entity('fermentables', {}, { idAttribute: '_id' });
export const fermentableListSchema = [fermentableSchema];

const styleSchema = new schema.Entity('styles', {}, { idAttribute: '_id' });
export const styleListSchema = [styleSchema];

const hopSchema = new schema.Entity('hops', {}, { idAttribute: '_id' });
export const hopListSchema = [hopSchema];

const yeastSchema = new schema.Entity('yeasts', {}, { idAttribute: '_id' });
export const yeastListSchema = [yeastSchema];
