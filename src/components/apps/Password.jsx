import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCheracter] = useState(false);
    const [password, setPassword] = useState("");

    const copyRef=useRef(null);

    const handleCopy=()=>{
        
        window.navigator.clipboard.writeText(password);
    }

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (character) str += "~`!@#$%^&*()_+[]{}";
        if (number) str += "1234567890";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass)
    }, [length, number, setPassword, character])

    useEffect(() => {
        passwordGenerator();
    }, [length, number, passwordGenerator, character])

    return (
        <div>
            <input type="text" value={password} ref={copyRef} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} readOnly />
            <button onClick={handleCopy}>Copy</button>
            <input type="range" min={6} max={100} id='length' value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="length">Length : {length}</label>
            <input type="checkbox" value={character} onChange={() => setCheracter((prv) => !prv)} />
            <span>Checkbox</span>
            <input type="checkbox" value={number} onChange={() => setNumber((prv) => !prv)} />
            <span>Checkbox</span>
        </div>
    )
}

export default Password