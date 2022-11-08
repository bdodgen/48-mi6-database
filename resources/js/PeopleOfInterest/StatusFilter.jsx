import { useEffect, useState } from "react";
// import axios from 'axios';

const StatusFilter = ({selectedStatus, setSelectedStatus}) => {

    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        // Getting data with fetch:
        // const response = await fetch('http://dev.mi6.com/api/statuses');
        // const data = await response.json();

        // Getting data with axios
        try {
            const response = await axios.get('http://dev.mi6.com/api/statuses');
            setStatuses(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadStatuses();
    }, [])

    return (
        <div className='status-filter-container'>
            {
                statuses.map(status => {
                    return <button className={(status.id == selectedStatus) ? 'status-filter status-filter__status_selected' : 'status-filter'} onClick={(e) => {
                        e.preventDefault();
                        if(selectedStatus == status.id) {
                            setSelectedStatus('');
                        }
                        else {
                            setSelectedStatus(status.id);
                        }
                    }}>{status.name}</button>
                })
            }

        </div>
    )

}

export default StatusFilter;