class LocalStorageService {
  // Kiểm tra môi trường hiện tại: true nếu là client, false nếu là server
  static isClient(): boolean {
    return typeof window !== 'undefined';
  }

  // Set a value in localStorage
  static setItem(key: string, value: any): void {
    if (this.isClient()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Get a value from localStorage
  static getItem<T>(key: string, defaultValue: T): T {
    if (this.isClient()) {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultValue;
    }
    return defaultValue;
  }

  // Remove an item from localStorage
  static removeItem(key: string): void {
    if (this.isClient()) {
      localStorage.removeItem(key);
    }
  }

  // Clear all keys from localStorage
  static clear(): void {
    if (this.isClient()) {
      localStorage.clear();
    }
  }

  // Optional: Get all keys from localStorage
  static getKeys(): string[] {
    if (this.isClient()) {
      return Object.keys(localStorage);
    }
    return [];
  }

  // Optional: Get all values from localStorage
  static getValues(): string[] {
    let values: string[] = [];
    if (this.isClient()) {
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          values.push(localStorage.getItem(key) as string);
        }
      }
    }
    return values;
  }
}

export default LocalStorageService