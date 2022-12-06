import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connexion, logout } from './UserSlice';

export default function Login() {
  const [userMail, setUserMail] = useState<string | null>(null);
  const isConnected = useSelector((state) => state.user.isConnected);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const role = useSelector((state) => state.user.role);

  const dispatch = useDispatch();
  return isConnected ? (
    <>
      <div className="title">
        <h2>User</h2>
      </div>
      <div className="card">
        <div className="spaceBetween">
          <p>
            <b>
              {firstname} {lastname}
            </b>{' '}
            - {role}
          </p>
          <button type="button" onClick={() => dispatch(logout())}>
            LOGOUT
          </button>
        </div>
      </div>
    </>
  ) : (
    <div>
      <div className="title">
        <h2>Login</h2>
      </div>
      <form>
        <input
          type="mail"
          style={{ marginRight: 10 }}
          onChange={(e) => setUserMail(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            dispatch(connexion({ mail: userMail, date: new Date() }))
          }
          disabled={userMail ? false : true}
        >
          Go !
        </button>
      </form>
    </div>
  );
}
