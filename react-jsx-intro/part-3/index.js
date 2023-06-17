const Person = (props)=>{
    let name = props.name.length >8? props.name.substring(0,8) : props.name;
    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <h3>{name}: {props.age >= 18? "please go vote!" : "you must be 18"}</h3>
            <h3>Hobbies:</h3>
            <ul>{props.hobbies.map((h,i) => <li key={i}>{h}</li>)}</ul>
        </div>
)};

const App = ()=>(
    <div>
        <Person  name="Leslie Sarandon" age={39}
            hobbies={["Making honey","Bird calling", "Skydiving"]}></Person>

        <Person  name="Claudia Gosling" age={15}
            hobbies={["Frog hunting", "Pottery", "Collecting toy cars" , "Making snow globes", "Playing the saxophone","gymnastics"]}></Person>

        <Person  name="Sue Ma" age={39}
            hobbies={["Collecting coins", "Knitting", "Collecting insects", "Playing Ping Pong"]}></Person>
    </div>
    
);

ReactDOM.render(<App/>, document.getElementById("root"));

// names=["Leslie Sarandon", "Claudia Gosling", "Ryan Schiffer", "Susan Mann"]