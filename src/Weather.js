import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./weather.css"
import axios from "axios";

export default function Weather () {
    return (
        <div className="weatherbox">
            <div className="box">
            <div className="formbox">
            <form>
                <input type="search" placeholder="change city" className="searchbox"/>
                <input type="submit" value="search" className="btn-form"/>
            </form>
            </div>
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
                    <h2>21°C</h2>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                    min: 16°C<br/>
                    max: 22°C
                    </div>
                    <div>
                    Humidity:<br/>
                    53%
                    </div>
                    <div>
                    Wind: <br/>
                    4.12km/h    
                    </div>
                </div>

            </div>
            <div className="forecast box">
                <div className="d-flex justify-content-between">
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16°C<br/>
                    max: 22°C
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16°C<br/>
                    max: 22°C
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                        min: 16°C<br/>
                    max: 22°C
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16°C <br/>
                    max: 22°C
                    </div>
                    <div>
                    Mon
                    <div className="circle" > </div>
                    min: 16°C<br/>
                    max: 22°C
                    </div>
                </div>
            </div>
        </div> 
    );
}