import storage from '@/app/utils/storage/storage';

export function isCocktailDone(id: number): boolean {
  return storage.get(id.toString()) !== null;
}

export function updateCocktailDoneState(id: number, isChecked: boolean): void {
  if (!isChecked) {
    storage.remove(id.toString());
  } else {
    storage.set(id.toString(), new Date().getTime().toString());
  }
}
