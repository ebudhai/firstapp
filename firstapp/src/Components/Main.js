import React, { useReducer } from "react";
import { /*Navigate,*/ Route, Routes, useNavigate} from 'react-router-dom';
import Header from './Header';
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBookings";

const Main = () => {
    /*const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])*/
    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) /m;
        };
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());

        for(let i = 17; i <=23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if (random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData){
        return true;
    };

    const initialState = {initializeTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return{initializeTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }

    return(
        <main className="main">
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/Booking' element={<Booking initializeTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path='/Confirmed' element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    );
};

export default Main;