import { InjectionToken } from '@angular/core';

export interface NavigationPaths {
  products: string;
  favorites: string;
}

export const NAVIGATION_PATHS: NavigationPaths = {
  products: 'all-products',
  favorites: 'favorites-products',
};

export const PATHS = new InjectionToken<Record<string, string>>(
  'NAVIGATION_PATHS'
);
