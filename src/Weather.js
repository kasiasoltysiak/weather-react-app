import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./weather.css"

export default function Weather () {
    return (
        <div className="weatherbox">
            <div className="searchbox">
            <form>
                <input type="search" placeholder="change city"/>
                <input type="submit" value="search"/>
            </form>
            </div>
            

            <div className="current box">
                <div className="d-flex justify-content-between">
                    <div>
                        <h1>Amsterdam</h1>
                    </div>
                    <div className="date">
                        <p>
                        16:58 <br/>
                        Thu, 20 July
                        </p>
                    </div>
                </div>

                <div className="m-5"> 
                    <div className="circle" > </div>
                    <h2>21C</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                    min: 16
                    max: 22
                    </div>
                    <div>
                    Humidity: 53%
                    </div>
                    <div>
                    Wind: 
                    4.12km/h    
                    </div>
                </div>

            </div>
            <div className="forecast box">
                <div className="d-flex justify-content-between">
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16<br/>
                    max: 22
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16<br/>
                    max: 22
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                        min: 16<br/>
                    max: 22
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16 <br/>
                    max: 22
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16<br/>
                    max: 22
                    </div>
                </div>
            </div>
        </div> 
    );
}