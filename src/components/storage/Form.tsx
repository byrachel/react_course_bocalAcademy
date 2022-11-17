import { useEffect, useState } from 'react';

export default function Form() {
  const [myInput, setMyInput] = useState<string | null>(null);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (list.length > 0) {
      // console.log('myInput a changé !!!')
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);

  useEffect(() => {
    if (localStorage.getItem('list')) {
      const myStorage = JSON.parse(localStorage.getItem('list') || '');
      setList(myStorage);
    }
  }, []);

  const removeAll = () => {
    localStorage.removeItem('list');
    setList([]);
    setMyInput(null);
  };

  return (
    <>
      <div className="title">
        <h2>Storage</h2>
      </div>
      <div style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="WTF ?"
          onChange={(e) => setMyInput(e.target.value)}
          style={{ padding: 12, borderRadius: 7, borderWidth: 1 }}
        />
        <button
          type="submit"
          onClick={() => (myInput ? setList([...list, myInput]) : null)}
          style={{ marginLeft: 15 }}
        >
          Save
        </button>
        <button type="submit" onClick={removeAll} style={{ marginLeft: 15 }}>
          Remove All
        </button>
      </div>
      {list.length > 0 ? (
        <ul>
          {list.map((string, idx) => (
            <li key={idx}>{string}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
