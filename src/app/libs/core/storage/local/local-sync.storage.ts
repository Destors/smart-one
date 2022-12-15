import { Injectable } from '@angular/core';
import { AbstractSyncStorage } from '../common/storages/abstract-sync.storage';
import { storageAvailable } from '../common/utils/storage.util';
import { MemoryStorage } from '../memory/memory.storage';

@Injectable({
  providedIn: 'root',
})
export class LocalSyncStorage extends AbstractSyncStorage {
  constructor() {
    super(
      storageAvailable('localStorage')
        ? window.localStorage
        : new MemoryStorage()
    );
  }
}
