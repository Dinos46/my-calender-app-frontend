// import { httpService } from './httpService';
import { utilService } from './utilService';

export const eventService = {
    query,
    getById,
    save,
    remove,
}

const events = [
    {
        _id: utilService.makeId(),
        description: 'go to meeting',
        date: '9/6/2021'
    },
    {
        _id: utilService.makeId(),
        description: 'go to buy stuff',
        date: '11/8/2021'
    },
    {
        _id: utilService.makeId(),
        description: 'learn more js',
        date: '8/9/2021'
    },
    {
        _id: utilService.makeId(),
        description: 'learn more reactjs',
        date: '9/9/2021'
    }
];


async function query() {
    try {
        return Promise.resolve(events)
        // return await httpService.get('event')
    } catch (err) {
        console.error('cant get events', err)
    }
}

async function getById(id) {
    try {
        // return await httpService.get(`event/${id}`)
    } catch (err) {
        console.error(`cant find event ${id}`)
    }
}

async function save(ev) {
    try {
        if (ev._id) {
            // return await httpService.put(`event/${ev._id}`, ev)
        } else {
            // return await httpService.post('event/', ev)
        }
    } catch (err) {
        console.error('cant save stay', err)
    }
}

async function remove(id) {
    try {
        // return await httpService.delete(`event/${id}`)
    } catch (err) {
        console.error('cant authorized!', err)
    }
}