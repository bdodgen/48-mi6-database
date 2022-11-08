import PeopleList from "./PeopleList"
import { useState } from "react";
import StatusFilter from "./StatusFilter";

const App = () => {
    const [people, setPeople] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    return (
        <div id="returned-app-component">
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            <PeopleList people={people} setPeople={setPeople} selectedStatus={selectedStatus}/>
        </div>
    )
}

export default App