import {useState} from "react";

export default function Player({name, symbol}) {
    const [valueButton, setValueButton] = useState('Edit');
    const [valueInput, setValueInput] = useState(name);
    function handleClickButton(valueButton) {

        if(valueButton === 'Edit') {
            setValueButton('Save');
        } else {
            setValueButton('Edit');
        }
    }

    function handleOnchange(event) {
        setValueInput(event.target.value);
        name = valueInput;
    }

    let input = <input className="player" type="text" value={valueInput} onChange={handleOnchange}/>;
    if(valueButton === 'Edit') {
        input = <span className="player-name">{valueInput}</span>;
    }
    return (
        <li>
             <span className="player">
                 {input}
                 <span className="player-symbol">{symbol}</span>
             </span>
            <button onClick={() => handleClickButton(valueButton)}>{valueButton}</button>
        </li>
    );
}