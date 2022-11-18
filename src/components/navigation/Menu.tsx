import { useNavigate } from 'react-router-dom';

interface Props {
  setDisplayMenu: (arg: boolean) => void;
}

export default function Menu({ setDisplayMenu }: Props) {
  const navigate = useNavigate();

  const goTo = (slug: string) => {
    setDisplayMenu(false);
    return navigate(slug);
  };
  return (
    <div className="menu-layout">
      <p
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('/cocktails')}
      >
        Cocktails
      </p>
      <p
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('/form')}
      >
        Locale Storage
      </p>
      <p
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('/lottery')}
      >
        Loterie
      </p>
      <p
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('/movies')}
      >
        Liste de films
      </p>
      <p
        role="button"
        style={{ cursor: 'pointer' }}
        onClick={() => goTo('/books')}
      >
        Bouquins
      </p>
    </div>
  );
}
