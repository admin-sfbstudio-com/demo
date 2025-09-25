import { faker } from '@faker-js/faker';
import { db } from '../..';
import { tasks } from '../../schemas';

export const seed = async () => {
  console.info('\n=> Creating tasks...\n');

  const promises = [];

  for (let i = 0; i < 100; i++) {
    const name = faker.word.sample({ length: { min: 4, max: 10 } });

    const promise = db.insert(tasks).values({ name }).onConflictDoNothing();

    promises.push(promise);
  }

  await Promise.all(promises);
};
