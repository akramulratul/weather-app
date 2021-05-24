import React from 'react';

const Weather = ({city}) => {
   console.log(city.sys);
//    const {sys} = city;
    return (
        <div className="container">
            <div className="cards">
            <h1>{city.name},{city.sys.country}</h1>
                <h5 className="py-4">   
                <i class="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-2">{city.wind.deg}&deg;</h1>

                {/* show max & min temp */}
                {minmaxTemp(24,19)}
                <h4 className="py-3"> Slow Rain</h4>
            </div> 
        </div>
    );
};

function minmaxTemp(min,max){   
    return(
        <h3> <span className="px-4">{min}&deg;</span> 
        <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;