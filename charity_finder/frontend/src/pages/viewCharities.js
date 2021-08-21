import AddNew from './addNew'

function ViewCharities(props) {
    const viewAll = (state) => {
        return fetch('http://http://localhost:4000/newcharity', {
            method: "POST",
            headers: {
                'Content-type': "application/JSON"
            },
            body: JSON.stringify()
        })
        .then(res => res.json())}
        return(
    viewAll.map((state) => {
    
        <div>
        <h2>{state.orgname}</h2>
        <h3>{state.author}</h3>
        <h3>{state.mission}</h3>
        <h4>{state.orgurl}</h4>
        </div>  
    }))
}      
export default ViewCharities;

//view all charities page where you can then edit, update and
//delete a charity. Not currently working