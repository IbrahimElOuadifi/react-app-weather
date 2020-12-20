import React from 'react';

export default function InputBar(props) {
    return (
        <div className="input-bar">
            <form onSubmit={props.submit}>
                <input type="text" name="cityName" placeholder="City name..." value={props.cityName} onChange={props.cityChange}/>
                <div className="options">
                    <select name="lang" id="lang" onChange={props.setLang}>
                        <option value="en">En</option>
                        <option value="fr">Fr</option>
                        <option value="ar">Ar</option>
                    </select>
                    <select name="temp" id="temp" onChange={props.setTemp}>
                        <option value="c">°C</option>
                        <option value="f">°F</option>
                        <option value="k">°K</option>
                    </select>
                </div>
            </form>
        </div>
    )
}