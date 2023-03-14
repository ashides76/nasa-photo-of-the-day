import React from "react";


const NasaDetail = (props) => {
    const {nasaData, setDate} = props
    const changeHandler = event => {
      // STRETCH - On 'change' of the input we should set a new search term in app state
        return setDate(event.target.value);
    //   return setDate(event.target.value.toLowerCase().trim())
    }
    console.log(nasaData)
    return (
        <div>
            <h1>{nasaData.title}</h1>
            <p>Description: {nasaData.explanation}</p>
            <input type='date' onChange={changeHandler} />
            {/* <p>{nasaData.date}</p> */}
            <div>
                <img src={nasaData.url} alt = "Astronomy Picture of the Day"/>
            </div>
        </div>
    )
}
export default NasaDetail