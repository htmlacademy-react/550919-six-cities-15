import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const setCityActive = createAction('main/setCityActive', (value: string)=>({payload: value}));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: City) => ({ payload: value }));
