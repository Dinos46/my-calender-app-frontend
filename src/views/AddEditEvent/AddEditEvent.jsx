import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//state
import { useDispatch, useSelector } from 'react-redux';
import {
  addEvent,
  editEvent,
  removeEvent,
} from '../../store/thunks/eventThunk';
import { eventService } from '../../services/eventService';
//icons
import AddIcon from '@material-ui/icons/Add';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DeleteIcon from '@material-ui/icons/Delete';

export const AddEditEvent = () => {
  const [event, setEvent] = useState({
    description: '',
  });
  const date = useSelector((state) => state.event.selectedEv);
  const status = useSelector((state) => state.event.status);
  const dispatch = useDispatch();
  const { _id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (_id) {
      eventService.getById(_id).then((res) => setEvent(res));
    }
  }, [_id]);

  const handleChange = ({ target }) => {
    setEvent((prev) => {
      return { ...prev, description: target.value };
    });
  };

  const onSaveEvent = (ev) => {
    ev.preventDefault();
    const evToAdd = { date, description: event };
    const evToUpdate = { ...event };
    _id ? dispatch(editEvent(evToUpdate)) : dispatch(addEvent(evToAdd));
    if (status === 'success') {
      history.push('/');
    }
  };

  const deleteEvent = (ev) => {
    ev.preventDefault();
    dispatch(removeEvent(_id));
    if (status === 'success') {
      history.push('/');
    }
  };

  return (
    <section className='add-edit'>
      <form className='flex' onSubmit={onSaveEvent}>
        <div className='content-container flex'>
          <label htmlFor='des'>
            {_id ? 'edit description' : 'add description'}
          </label>
          <input
            type='text'
            name='des'
            id='des'
            required
            value={event?.description}
            onChange={handleChange}
          />
        </div>
        <div className='btn-container flex'>
          <button className='btn'>{_id ? <SaveAltIcon /> : <AddIcon />}</button>
          <button className='btn' onClick={deleteEvent}>
            <DeleteIcon />
          </button>
        </div>
      </form>
    </section>
  );
};
