import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MissionEditForm = () => {
    const { id } = useParams();

    const [data, setData] = useState({
        'id': '',
        'name': '',
        'year': '',
        'outcome': ''
    });

    const loadMission = async () => {
        const response = await axios.get('/api/mission/'+id);
        setData(response.data);
    }

    const handleSubmit = async () => {
        const response = await axios.post('/api/mission/store', data);

        console.log(response.status);
    }

    useEffect(() => {
        loadMission();
    }, []);

    const handleChange = (event) => {
        setData(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        <form action="" method="post">

            <input type="text" name="name" value={ data.name } onChange={ handleChange } />
            <input type="number" name="year" value={ data.year } onChange={ handleChange } />
            <select name="outcome">
                <option value={null} selected={data.outcome == null ? true : false}>Not known</option>
                <option value={true} selected={data.outcome == 1 ? true : false}>Success</option>
                <option value={false} selected={data.outcome == 0 ? true : false}>Failure</option>
            </select>

            <button onClick={(e)=> {
                e.preventDefault();
                handleSubmit();
            }}>SUBMIT</button>
        </form>
    )
}

export default MissionEditForm;