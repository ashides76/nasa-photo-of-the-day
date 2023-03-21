import React from "react";
import styled, {keyframes} from "styled-components";

const kf1 = keyframes`
  100% {
    opacity: 2;
    transform: scale(1) rotateZ(0);
  }
`
const kf2 = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const StyledNasa = styled.div`
    // background-color: ${props => props.theme.primary};
    background-color: #f7f8fa;
    color: ${props => props.theme.black}; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px 50px;
    width: 100%;

    p{
        width: 80%;
    }

    h1{
        // --------- transitions and animations
        transform: scale(2); // start of animation
        opacity: 0; // start of animation
        animation: ${kf2} 2s ease-in-out forwards;
    }

    img{
        opacity: 0;
        transform: scale(4) rotateZ(180deg);
        animation: ${kf1} 3s ease-in-out forwards;
    }
`

const NasaDetail = (props) => {
    const {nasaData, setDate} = props
    const changeHandler = event => {
      // STRETCH - On 'change' of the input we should set a new search term in app state
        return setDate(event.target.value);
    //   return setDate(event.target.value.toLowerCase().trim())
    }
    console.log(nasaData)
    return (
        <StyledNasa>
            <h1>{nasaData.title}</h1>
            <p><b>Description:</b> {nasaData.explanation}</p>
            <input type='date' onChange={changeHandler} />
            <div>
                <img src={nasaData.url} alt = "Astronomy Picture of the Day"/>
            </div>
            <p>@Ashish Desai</p>
        </StyledNasa>
    )
}
export default NasaDetail