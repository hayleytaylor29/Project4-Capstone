const axios = require('axios');
const express = require('express');
const router = express.Router();
const app = express();
require('dotenv').config()
let bodyParser = require('body-parser')

router.use(express.urlencoded({ extended:true }));
router.use(methodOverride('_method'));
router.use(bodyParser.json());
router.use(express.json({
    type: ['application/json', 'text/plain']
}))

//Charity API
// const url = "https://api.pledge.to/v1/organizations/";
// const apiKey = process.env.PLEDGEAPI_KEY;
// const qOrg = "?q=red cross"
// // const limit = "&total_count=10"; -- can't seem to get this to work
// const searchURL = `${url}${qOrg}${apiKey}`

// function App () {
//     const [searchTerm, setSearchTerm] = React.useState(null);


//     React.useEffect(() => {
//         axios.get(searchURL).then((response) => {
//         setSearchTerm(response.data);
//         });
//     }, []);

//     if (!searchTerm) return null;

//     return (
//         <ul>
//             {}
//         {/* <h1>{data.results.name}</h1>
//         <p>{data.results.city}</p>
//         <p>{data.results.profile_url}</p> */}
//         </ul>
//     );
// }

// const charitySearch = async (search) => {
//     const response = await axios.get(searchURL)
//     const data = await response.json()
//     console.log(data)
// }

// charitySearch(req.body.charitySearch)

// module.exports = router;