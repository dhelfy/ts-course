import React, { FC, useRef, useState } from "react";

export let EventsExample: FC = () => {
    let [inputValue, setinputValue] = useState<string>('')
    let inputRef = useRef<HTMLInputElement>(null)

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setinputValue(e.currentTarget.value)
    }

    function clickHandler() {
        alert(inputValue)
        console.log(inputRef.current?.value)
    }

    return (
        <div>
            <input value={inputValue} onChange={changeHandler} placeholder="Управляемый" />
            <input ref={inputRef} placeholder="Неуправляемый" />
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}