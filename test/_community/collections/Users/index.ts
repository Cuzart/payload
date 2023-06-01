import { CollectionConfig } from '../../../../src/collections/config/types';

export const Users: CollectionConfig = {
  slug: 'users',

  auth: {
    tokenExpiration: 604800, // 1 week
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Noname',
      access: {
        read: () => true,
        update: () => false,
      },
    },
  ],
};
