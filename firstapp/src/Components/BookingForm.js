import React, { useState } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasions, setOccasions] = useState("");


    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-data">Choose a Dat:e</label>
                            <input id="book-data" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>

                        <div>
                        <label htmlFor="book-time">Choose a Time:</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                                {props.initializeTimes.initializeTimes.map(initializeTimes => {return <option key={initializeTimes}>{initializeTimes}</option>})}
                        </select>
                        </div>

                        <div>
                            <label htmlFor="book-guest">Number of Guests</label>
                            <input id="book-guest" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" key={occasions} value={occasions} onChange={(e) => setOccasions(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label=" On Click" type={"submit"} value={"Make Your Reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;