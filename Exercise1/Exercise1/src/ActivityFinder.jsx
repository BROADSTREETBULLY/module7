import { useState, useEffect } from "react";

function ActivtyFinder() {
    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');

    useEffect(() => {
        fetch('https://bored.api.lewagon.com/api/activity?' +
            'participants=' + participants)
            .then(response => response.json())
            .then(json => {
                setActivity(json.activity);
            });
    }, [participants]);

    return (
        <div>
            <h3>Activity Finder</h3>
            <label>Choose number of participants;
                <select value={participants}
                onChange={e => setParticipants(e.target.value)}>
                    <option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggest Activity:</strong> {activity}</div>
        </div>

    )
}
export default ActivtyFinder