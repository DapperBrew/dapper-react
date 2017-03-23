import { schema } from 'normalizr';

const equipmentSchema = new schema.Entity('equipments', [], { idAttribute: '_id' });
export const equipmentListSchema = [equipmentSchema];
