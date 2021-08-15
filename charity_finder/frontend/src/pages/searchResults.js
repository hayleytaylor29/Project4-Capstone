import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
// import OrgSearch from './orgSearch';

function OrgSearchResults(props) {
    const location = useLocation();
    console.log(location);
    let [organ, setOrgan] = useState([]);
    let [userInput, setUserInput] = useState(location.state.organ);
    const url = "https://api.pledge.to/v1/organizations/";
    const apiKey = process.env.REACT_APP_PLEDGEAPI_KEY;
    const qOrg = `?q=${userInput}`
    // const limit = "&total_count=10"; -- can't seem to get this to work
    const searchURL = `${url}${qOrg}`

    const getOrg = useCallback(() => {
        axios({
            "method": "GET",
            "url": `${searchURL}`,
            "headers": {
                "Authorization": `Bearer ${apiKey}`,
            }, "params": {
                "country": "US",
                "per_page": 10
            }
        })
        .then((response) => {
            console.log(response.data.results)
            setOrgan(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    []);
    
    useEffect(() => {
        getOrg();
    }, []);
    
    const loaded = () => {
        return(
            <div>
                <h1>Search Results:</h1>
                {organ.map((org) => {
                    let orgURL = org.profile_url
                    // console.log(org.profile_url)
                    return (
                        <div key={org.id}>
                            <h3><a href={orgURL} target="blank">{org.name}</a></h3>
                            <p>{org.city} {org.region ? org.region : ""}</p>
                        </div>
                    )
                })}
            </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    }
    return organ ? loaded() : loading()
}

export default OrgSearchResults;