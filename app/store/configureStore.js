import {configureStore} from '@reduxjs/toolkit';
import reducer from './user';

export default function () {
  return configureStore({
    reducer,
  });
}
