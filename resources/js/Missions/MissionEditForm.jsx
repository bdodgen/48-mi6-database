import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const MissionEditForm = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [data, setData] = useState({
        'id': '',
        'name': '',
        'year': '',
        'outcome': ''
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const loadMission = async () => {
        const response = await axios.get('/api/mission/'+id);
        setData(response.data);
    }

    const handleSubmit = async () => {
        try {

            const response = await axios.post('/api/mission/store', data);

            setData({
                ...data,
                id: response.data.mission.id
            })

            setSuccessMessage('Mission was successfully saved');

            navigate('/missions/'+response.data.mission.id);

        } catch (error) {

            if (error.response.status == 422) {
                // time to handle validation errors and display them
                setErrors(error.response.data.errors)
            }

        }
        // const response = await fetch('/api/mission/store', {
        //     method: 'post',
        //     headers: {
        //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //     }
        // })
    }

    useEffect(() => {
        if (id) {
            loadMission();
        }
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

            {
                successMessage
                    ? <div className="success-message">{ successMessage }</div>
                    : ''
            }

            <br />

            Name:<br />
            <input type="text" name="name" value={ data.name } onChange={ handleChange } />
            <br />

            {
                errors.name
                    ? <div className="error">
                        { errors.name.map((error, i) => <div key={ i }>{ error }</div>) }
                    </div>
                    : ''
            }

            Year:<br />
            <input type="number" name="year" value={ data.year } onChange={ handleChange } />
            <br />

            {
                errors.year
                    ? <div className="error">
                        { errors.year.map((error, i) => <div key={ i }>{ error }</div>) }
                    </div>
                    : ''
            }

            Outcome:<br />
            <select name="outcome" value={ data.outcome } onChange={ handleChange }>
                <option value="">Not known</option>
                <option value="1">Success</option>
                <option value="0">Failure</option>
            </select>
            <br />

            <br />
            <button onClick={(e)=> {
                e.preventDefault();
                handleSubmit();
            }}>SUBMIT</button>

        </form>
    )
}

export default MissionEditForm;