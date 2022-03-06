
function InsightButtons(props) {

    return (
        <div>
            <button className="border rounded-xl bg-green-800 text-white px-2 py-1 m-1">Reflect</button>
            <button className="border rounded-xl bg-green-800 text-white px-2 py-1 m-1">Prepare</button>
        </div>
    )
}

function Habit(props) {

    return (
        <div className="bg-white w-2/5 p-2 my-2">{props.name}
            <InsightButtons />
        </div>
    )
}

//Fetches habits data and creates Habits components
function HabitsCards() {

    let prototype_list = [{ "name": "Hacer más ejercicio" }, { "name": "leer más" }, { "name": "Darle comida a los perros" }, { "name": "Sacar el bachillerato de Electrica" }]
    let habits = prototype_list.map(c => <Habit name={c.name} />)

    return <div className="grid place-items-center my-5">{habits}</div>
}

export default HabitsCards