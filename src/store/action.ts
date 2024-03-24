import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortType } from '../const';

export const setCityActive = createAction('main/setCityActive', (value: string)=>({payload: value}));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: City) => ({ payload: value }));
export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
export const setSortOffers = createAction('setSortOffers');
