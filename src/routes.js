import { Calender } from './views/Calender';
import { AddEditEvent } from './views/AddEditEvent';

export const routes = [
    {
        path: '/save',
        component: AddEditEvent
    },
    {
        path: '/',
        component: Calender
    }

];