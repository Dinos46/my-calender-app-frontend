import Axios from 'axios';

export const eventService = {
    query,
    getById,
    save,
    remove,
};

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:5000/api/';


async function query() {
    try {
        const { data } = await Axios.get(`${BASE_URL}event/`);
        return data;
    } catch (err) {
        console.error('cant get events', err);
    };
};

async function getById(_id) {
    try {
        const { data } = await Axios.get(`${BASE_URL}event/${_id}`);
        return data;
    } catch (err) {
        console.error('cant get stay', err);
    };
};

async function save(ev) {
    try {
        if (ev._id) {
            const { data } = await Axios.put(`${BASE_URL}event/${ev._id}`, ev);
            return data
        } else {
            const { data } = await Axios.post(`${BASE_URL}event/`, ev);
            return data
        };
    } catch (err) {
        console.error('cant save event', err);
    };
};

async function remove(evId) {
    try {
        await Axios.delete(`${BASE_URL}event/${evId}`);
    } catch (err) {
        console.error(`cant remove event ${evId}`, err);
    };
};