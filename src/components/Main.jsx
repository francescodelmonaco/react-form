import { useState } from "react";

const Main = () => {
    const [articles, setArticles] = useState([
        "5 Strategie per Migliorare la Produttività al Lavoro",
        "Viaggi Sostenibili: Come Ridurre l'Impatto Ambientale",
        "Le 5 Tecnologie che Cambieranno il Futuro",
        "10 Alimenti per una Dieta Equilibrata e Personalizzata",
        "Come Creare un Giardino Ecologico in 7 Passaggi"
    ]);
    const [title, setTitle] = useState("");

    // funzione per aggiungere un articolo tramite form
    const addArticle = (e) => {
        e.preventDefault();
        setArticles([...articles, title]);
        setTitle("");
    };

    // funzione per eliminare articolo nella lista
    const removeArticle = (indexArticle) => {
        const arrayClone = articles.filter((_, index) => index !== indexArticle);
        return setArticles(arrayClone);
    };

    return (
        <>
            <main>
                <ul className="margin-60">
                    {
                        articles.map((article, index) => (
                            <>
                                <div className="list-row">
                                    <li key={index}>{article}</li>

                                    <div className="list-icon">
                                        <button>
                                            <i class="fa-solid fa-pen"></i>
                                        </button>

                                        <button className="remove-icon" onClick={() => removeArticle(index)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </ul>

                <form onSubmit={addArticle} className="margin-60">
                    <h2>Form per l'inserimento di un nuovo articolo</h2>

                    <div className="input-flex">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Inserisci il titolo del nuovo articolo"
                        />

                        <button>Aggiungi</button>
                    </div>
                </form>
            </main>
        </>
    )
};

export default Main;