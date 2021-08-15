import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import OrgSearch from './orgSearch';
const axios = require('axios');
require('dotenv').config()

function OrgSearchResults() {
    const [organ, setOrgan] = useState(null);
    const url = "https://api.pledge.to/v1/organizations/";
    const apiKey = "abb243068872ebda30fc59e90a307a47";
    const qOrg = "?q=red cross"
    // const limit = "&total_count=10"; -- can't seem to get this to work
    const searchURL = `${url}${qOrg}`

    const getOrg = () => {
        const response = axios.get(searchURL, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await response.json();
        setOrgan(data)
        console.log(data.results[0].name)
    }
    useEffect(() => {
        getOrg();
    }, []);
    
    const loaded = () => {
        return(
            <div>
                {organ.results.map((org) => {
                    return (
                        <div>
                            <h1>{org.name}</h1>
                            <p>{org.city} {org.region ? org.region : ""}</p>
                        </div>
                    )
                })}
            </div>
            // <div>
            //     <h1>{organ.results[0].name}</h1>
            //     <p>{organ.results[0].city},{organ.results[0].region},{organ.results[0].country}</p>
            // </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    }
    return organ ? loaded() : loading()
}

//     React.useEffect(() => {
//         axios.get(searchURL).then((response) => {
//         setSearchTerm(response.data);
//         });
//     }, []);

//     if (!searchTerm) return null;

//     return (
//         <ul>
//             <h1>{data.results[0].name}</h1>
//         {/* <h1>{data.results.name}</h1>
//         <p>{data.results.city}</p>
//         <p>{data.results.profile_url}</p> */}
//         </ul>
//     );
// }

export default OrgSearchResults;