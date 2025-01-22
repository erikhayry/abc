import storage from '@/app/utils/storage/storage';

describe('storage', () => {
  it('should store key value pair', () => {
    expect(storage.set('key', 'value')).toEqual('value');
  });

  it('should get value by key', () => {
    storage.set('key', 'value');

    expect(storage.get('key')).toBe('value');
  });

  it('should remove value by key', () => {
    storage.set('key', 'value');
    storage.remove('key');
    expect(storage.get('key')).toBeNull();
  });
});
