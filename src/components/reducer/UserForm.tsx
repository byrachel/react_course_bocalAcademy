import { useReducer, useState } from 'react';
import { UserReducer } from './UserReducer';

export default function UserForm() {
  const initialState = {
    name: 'John',
    mail: 'john@lebocal.academy',
  };

  const [user, userDispatch] = useReducer(UserReducer, initialState);
  const [description, setDescription] = useState(null);
  const [newMail, setNewMail] = useState(null);
  const [newName, setNewName] = useState(null);

  return (
    <>
      <div className="title">
        <h2>User card</h2>
      </div>
      <button
        type="button"
        onClick={() => userDispatch({ type: 'UPPERCASE', payload: user })}
      >
        Uppercase
      </button>
      <div className="card">
        <div className="spaceBetween">
          <p>
            <b>{user.name ? user.name : 'Nom inconnu'}</b>
          </p>
          {user.name ? (
            <div>
              <button
                type="button"
                onClick={() =>
                  userDispatch({ type: 'OPEN_EDIT_USER', payload: 'NAME' })
                }
                style={{ marginRight: '10px' }}
              >
                edit
              </button>
              <button
                type="button"
                onClick={() =>
                  userDispatch({ type: 'REMOVE_PROP', payload: 'name' })
                }
              >
                X
              </button>
            </div>
          ) : null}
        </div>
        {user.edit === 'NAME' ? (
          <>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                userDispatch({
                  type: 'EDIT_USER',
                  payload: { prop: 'name', value: newName },
                })
              }
            >
              OK
            </button>
          </>
        ) : null}
        {user.description ? <p>{user.description}</p> : null}
        <div className="spaceBetween">
          <p>{user.mail ? user.mail : 'adresse mail inconnue'}</p>
          {user.mail ? (
            <div>
              <button
                type="button"
                onClick={() =>
                  userDispatch({ type: 'OPEN_EDIT_USER', payload: 'MAIL' })
                }
                style={{ marginRight: '10px' }}
              >
                edit
              </button>
              <button
                type="button"
                onClick={() =>
                  userDispatch({ type: 'REMOVE_PROP', payload: 'mail' })
                }
              >
                X
              </button>
            </div>
          ) : null}
        </div>
        {user.edit === 'MAIL' ? (
          <>
            <input
              type="email"
              placeholder="mail"
              onChange={(e) => setNewMail(e.target.value)}
            />
            <button
              type="button"
              onClick={() =>
                userDispatch({
                  type: 'EDIT_USER',
                  payload: { prop: 'mail', value: newMail },
                })
              }
            >
              OK
            </button>
          </>
        ) : null}
      </div>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <button
        type="button"
        onClick={() =>
          userDispatch({ type: 'ADD_DESCRIPTION', payload: description })
        }
      >
        Add Description
      </button>
    </>
  );
}
