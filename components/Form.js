import React from "react";

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>What's my weather?</button>
        </form>
    </div>
);




export default Form;