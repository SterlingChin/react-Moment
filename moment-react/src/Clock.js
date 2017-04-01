import React, { Component } from 'react';
import ReactInterval from 'react-interval';

class Clock extends Component {

    updateClock() {
        let currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        let timeOfDay = (currentHours < 12) ? "AM" : "PM";
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours === 0) ? 12 : currentHours;
        let currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;
        return currentTimeString
        }


    render() {
        return (
            <div id='clock'>
                {this.updateClock()}
                <ReactInterval timeout={1000} enabled={true} callback={() => this.setState({clock: this.updateClock()} )} />
            </div>
        );
    }
}

export default Clock;