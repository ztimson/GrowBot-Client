export interface WebStorageOptions {
  fieldName?: string;
  encryptionKey?: string;
  defaultValue?: any;
}

export function LocalStorage(opts: WebStorageOptions = {}) {
  return storage(localStorage, opts);
}

export function SessionStorage(opts: WebStorageOptions = {}) {
  return storage(sessionStorage, opts);
}

function storage(storageType: Storage, opts: WebStorageOptions) {
  return function(target: object, key: string) {
    if(!opts.fieldName) opts.fieldName = key;

    Object.defineProperty(target, key, {
      get: function() {
        let value = storageType.getItem(<string>opts.fieldName);
        if(!value && opts.defaultValue != null) return opts.defaultValue;
        return JSON.parse(<string>value);
      },
      set: function(value) {
        storageType.setItem(<string>opts.fieldName, JSON.stringify(value));
      }
    });
  };
}
