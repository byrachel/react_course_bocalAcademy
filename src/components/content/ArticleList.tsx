import Article from "./Article";

const lib = [
  {
    title: "Le Rouge et le Noir",
    author: "Stendhal",
    date: 1830,
    content: "Description du roman Le Rouge et le Noir de Stendhal.",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Le_rouge_et_le_noir_1831.JPG"
  },
  {
    title: "Candide",
    author: "Voltaire",
    date: 1759,
    content: "Résumé du conte Candide ou l'optimisme, de Voltaire.",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Candide1759.jpg"
  },
  {
    title: "Bel Ami",
    author: "Guy de Maupassant",
    date: 1885,
    content: "Description du roman Bel Ami de Maupassant.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Van_Gogh_Stilleben_Gipsstatue_anagoria.JPG/500px-Van_Gogh_Stilleben_Gipsstatue_anagoria.JPG"
  }
]

function ArticleList() {
  return (
    <>
      <div className="title">
        <h2>Librairie</h2>
      </div>
      {lib.map((book, idx) => <Article book={book} key={idx} />)}
    </>
  )
}

export default ArticleList;
