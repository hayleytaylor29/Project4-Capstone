import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import OrgSearch from './orgSearch';
require('dotenv').config()

function OrgSearchResults(props) {
    let [organ, setOrgan] = useState("");
    const url = "https://api.pledge.to/v1/organizations/";
    const apiKey = "abb243068872ebda30fc59e90a307a47";
    const qOrg = "?=red cross"
    // const limit = "&total_count=10"; -- can't seem to get this to work
    const searchURL = `${url}${qOrg}`
    
    useEffect(() => {
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
            setOrgan(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);
    
    const loaded = () => {
        return(
            <div>
                <h1>Search Results:</h1>
                {organ.results.map((org) => {
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