import { useEffect } from "react";
import { Link } from "react-router-dom"; 

const PeopleList = ({people, setPeople, selectedStatus}) => {

    const loadPeople = async () => {
        const response = await fetch('http://dev.mi6.com/api/people?status=' + encodeURIComponent(selectedStatus));
        const data = await response.json();

        console.log(data);

        setPeople(data);
    }

    useEffect(() => {
        loadPeople();
    }, [selectedStatus])

    return (
        <>
            <h1>People List</h1>
            <ul className="people-list">
                {
                    people.map((person) => {
                        return <li key={person.id}>
                            <p>Name: {person.name}</p>
                            {person.missions.length > 0 ? <p>Missions:</p> : ''}
                            {
                                person.missions.map(mission => {
                                    return <Link to={"/mission/"+mission.id}>{mission.name}</Link>
                                })
                            }
                            </li>
                    })
                }
            </ul>
        </>
    )
}

export default PeopleList;