import { Calendar } from './views/Calendar/Calendar';
import { AddEditEvent } from './views/AddEditEvent/AddEditEvent';

export const routes = [
    {
        path: '/save/:_id?',
        component: AddEditEvent
    },
    {
        path: '/',
        component: Calendar
    }

];