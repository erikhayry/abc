class Storage {
  set(key: string, value: string): string | null {
    localStorage.setItem(key, value);

    return this.get(key);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

const storage = new Storage();
export default storage;
