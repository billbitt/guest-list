import React, { PropTypes, Component } from 'react';


const DashboardHeader = ({currentEvent}) => {
  console.log("current event", currentEvent)
    return (
        <div className="row grey darken-3"> 
          
            <div className="col s12 m3 l3">
              { currentEvent.headliner && <h2>{currentEvent.headliner}</h2> }
            </div>

            <div className="col s3 m3 l3">
              <p className="support">With:</p>
              { currentEvent.supportOne && <p className="support">{currentEvent.supportOne} </p> }
              { currentEvent.supportTwo && <p className="support">{currentEvent.supportTwo}</p> }
              { currentEvent.supportThree && <p className="support">{currentEvent.supportThree}</p> }
            </div>

            <div className="col s3 m3 l3">
              <p>Date</p>
              <p>Time</p>
            </div>

            <div className="col s3 m3 l3">
              <p>Total People on Guest List: XX</p>
              <p>Total Guests Checked In: XX</p>
            </div>
          
        </div>
    );
}

export default DashboardHeader;