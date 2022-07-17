import { throttle } from 'lodash';
import { saveToLocalStorage, StorageKey } from './localStorage';

let prevCart = [];

export const createCartChangesSubscription = (store) => {
    return throttle(() => {
            console.log('lodash throttle event!');
            const currentCart = store.getState().favorite;

            if (prevCart !== currentCart) {
                prevCart = currentCart;
                saveToLocalStorage(StorageKey.favorite, currentCart);
            }
            return currentCart;
        },3000
    );
};