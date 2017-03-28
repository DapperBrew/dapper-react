import { schema } from 'normalizr';

const equipmentSchema = new schema.Entity('equipments', [], { idAttribute: '_id' });

// eslint-disable-next-line import/prefer-default-export
export const equipmentListSchema = [equipmentSchema];
