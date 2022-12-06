import { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub, empty, updateDevise, updateUser } from './WalletSlice';

export default function Wallet() {
  const dispatch = useDispatch();
  const [editUserName, setEditUserName] = useReducer((state) => {
    return !state;
  }, false);
  const [newUserName, setNewUserName] = useState<null | string>(null);
  const [addMoney, setAddMoney] = useState(0);
  const [subMoney, setSubMoney] = useState(0);

  const user = useSelector((state) => state.wallet.user);
  const devise = useSelector((state) => state.wallet.devise);
  const deposit = useSelector((state) => state.wallet.deposit);
  const history = useSelector((state) => state.wallet.historic);

  const handleNewUserName = () => {
    if (newUserName) {
      dispatch(updateUser(newUserName));
    }
    setEditUserName();
  };

  return (
    <>
      <div className="title">
        <h2>Wallet</h2>
      </div>
      <div className="card">
        <div className="spaceBetween">
          <p>
            <b> {user}</b>
          </p>
          <button type="button" onClick={setEditUserName}>
            edit
          </button>
        </div>
        {editUserName ? (
          <>
            <input
              type="text"
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="name"
            />
            <button type="button" onClick={handleNewUserName}>
              ok
            </button>
          </>
        ) : null}
        <div className="columns">
          <p>Devise: </p>
          <select
            value={devise}
            onChange={(e) => dispatch(updateDevise(e.target.value))}
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
              marginLeft: '10px',
            }}
          >
            <option value="$">$</option>
            <option value="€">€</option>
            <option value="£">£</option>
          </select>
        </div>
      </div>
      <div className="card">
        <div className="spaceBetween">
          <p>
            <b>
              Solde du compte : {deposit} {devise}
            </b>
          </p>
          {deposit > 0 ? (
            <button type="button" onClick={() => dispatch(empty())}>
              Vider le compte
            </button>
          ) : null}
        </div>
        <div className="columns">
          <p>Somme à ajouter : </p>
          <input
            type="number"
            value={addMoney}
            onChange={(e) => setAddMoney(parseInt(e.target.value))}
          />
          <button type="button" onClick={() => dispatch(add(addMoney))}>
            ok
          </button>
        </div>
        <div className="columns" style={{ marginTop: 10 }}>
          <p>Somme à retirer : </p>
          <input
            type="number"
            value={subMoney}
            onChange={(e) => setSubMoney(parseInt(e.target.value))}
          />
          <button
            type="button"
            onClick={() => dispatch(sub(subMoney))}
            disabled={deposit < subMoney}
          >
            ok
          </button>
        </div>
      </div>
      <div className="card">
        {history.length > 0 ? (
          history.map((elt, idx) => (
            <div className="spaceBetween" key={idx}>
              <p>
                {elt.action} {elt.amount} {elt.devise}
              </p>
              <p>
                {elt.deposit} {devise}
              </p>
            </div>
          ))
        ) : (
          <p>Aucune action a été effectuée</p>
        )}
      </div>
    </>
  );
}
