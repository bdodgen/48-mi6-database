import { useEffect } from "react";

const PeopleList = ({people, setPeople, selectedStatus}) => {

    const loadPeople = async () => {
        const response = await fetch('http://dev.mi6.com/api/people?status=' + encodeURIComponent(selectedStatus));
        const data = await response.json();

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
                        return <li key={person.id}>{person.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default PeopleList;