import { inMemoryPersistence } from '../../../src/core/persistence/in_memory';
import { Persistence } from '../../../src/core/persistence';
import { expect } from 'chai';

describe('InMemoryPersistence', () => {
  it('should work', async () => {
    const persistence: Persistence = inMemoryPersistence;
    const key = 'my-super-special-key';
    const value = 'my-super-special-value';
    expect(await persistence.get(key)).to.be.null;
    await persistence.set(key, value);
    expect(await persistence.get(key)).to.be.eq(value);
    expect(await persistence.get('other-key')).to.be.null;
    await persistence.remove(key);
    expect(await persistence.get(key)).to.be.null;
  });
});
