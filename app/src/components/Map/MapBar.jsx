import Map from "./Map";
import { useState, useEffect } from "react";
import axios from "axios";


function MapBar(props) {
    const address = props.city + "," + props.country;
    const urlLocation = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD6n6RMOFrebn6b3rWMi5B_xnAWXDmnr4k&address=" + address;
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);


    useEffect(() => {
        async function getLocation() {
            try {
                const res = await axios.get(urlLocation)
                setLatitude(res.data.results[0].geometry.location.lat);
                setLongitude(res.data.results[0].geometry.location.lng)
            } catch (err) {
                console.log(err)
            }
        }
        getLocation()
    }, []);


    return (

        <div>
            <Map latitude={latitude} longitude={longitude} zoom={15} name={props.name} address={address} />
        </div>

    )
}

export default MapBar;