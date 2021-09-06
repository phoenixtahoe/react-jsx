function Person(props) {
    let canVote = props.age >= 18 ? "Go vote" : "Go study"
    let hobbies = props.hobbies.map(e => <li>{e}</li>)
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbies}
                </ul>
            </ul>
            <div>
                <h3>{canVote}</h3>
            </div>
        </div>
    )
}