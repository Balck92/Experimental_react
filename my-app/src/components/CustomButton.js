
import React from "react";
import Button from '@material-ui/core/Button';

const CustomButton = ({ onIncrementAsync, onDecrementAsync, value }) => (
    <div className="CustomButton">
        <Button variant="contained" color="primary" onClick={onIncrementAsync}>INCREASE</Button>
        <Button variant="contained" color="primary" onClick={onDecrementAsync}>DECREASE</Button>
        <div className="ButtonText">Clicked: {value} times</div>
    </div>
);
export default CustomButton;