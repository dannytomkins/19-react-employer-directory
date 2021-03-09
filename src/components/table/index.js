import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Last</th>
                    <th scope="col">First</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Cell Number</th>
                </tr>
            </thead>
            <tbody>
                {console.log(props.people)}
                {props.people.length > 0 ? props.people.map(person => {
                    //sorting function
                    props.people.sort(function(a, b){
                        if(a.name.last < b.name.last) { return -1; }
                        if(a.name.last > b.name.last) { return 1; }
                        return 0;
                    })
                    return (
                        <tr>
                            <td><img src={person.picture.thumbnail} /></td>
                            <th>{person.name.last}</th>
                            <td>{person.name.first}</td>
                            <td>{person.phone}</td>
                            <td>{person.cell}</td>
                        </tr>
                    )
                }) :
                    <tr>
                        <p>No people found.</p>
                    </tr>}


            </tbody>
        </table>
    )
}

export default Table