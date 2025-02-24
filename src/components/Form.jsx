import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("Titolo dell'articolo")

    return (
        <form action="" className="margin-60">
            <h2>Form per l'inserimento di un nuovo articolo</h2>

            <div className="input-flex">
                <input
                    type="text"
                    value={title}
                    onChange={e => { setTitle(e.target.value) }}
                />

                <button>Aggiungi</button>
            </div>
        </form>
    )
};

export default Form;