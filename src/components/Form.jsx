import { useState } from "react";

const Form = () => {
    const [articles, setArticles] = useState([
        "5 Strategie per Migliorare la Produttività al Lavoro",
        "Viaggi Sostenibili: Come Ridurre l'Impatto Ambientale",
        "Le 5 Tecnologie che Cambieranno il Futuro",
        "10 Alimenti per una Dieta Equilibrata e Personalizzata",
        "Come Creare un Giardino Ecologico in 7 Passaggi"
    ]);
    const [title, setTitle] = useState("");

    const addArticle = (e) => {
        e.preventDefault();
        setArticles([...articles, title]);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("Articolo aggiunto!");
    // };

    return (
        <>
            <ul className="margin-60">
                {
                    articles.map((article, index) => (
                        <li key={index}>{article}</li>
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
        </>
    )
};

export default Form;