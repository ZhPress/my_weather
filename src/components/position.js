import { getPosition } from "../utils/getposition";

export const Position = ({setCurrentPosition, setFiveDaysWeather, time}) => {

    function getPositionWeather (setFiveDaysWeather, time) {
        getPosition(setFiveDaysWeather, time);
        setCurrentPosition(false);
    }

    return (
        <div className="position">
        <p className="position_p">Визначити Ваше геоположення, для надання більш точної інформації? </p>
            <button className="position_button" 
            onClick={(() => getPositionWeather(setFiveDaysWeather, time))}>Так</button>
            <span>   </span>
            <button className="position_button"
            onClick={(() => setCurrentPosition(false))}>Ні</button>
        </div>
    )
}