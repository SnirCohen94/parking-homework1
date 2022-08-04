import MyTask from "../../Componens/MyTask/MyTask";
import "./Home.css";

function Home(): JSX.Element {
    const Parking = [
        {
            id: 1,
            name: "Cohen",
            phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 2,
            name: "Levy",
            phone: "0544340139",
            carNum:"11198103",
            
        },
        {
            id: 3,
            name : "install lamps",
            phone: "0544340139",
            carNum:"11198103",
            
        },
        {
            id: 4,
            name : "make fish for",
            phone: "0544340139",
            carNum:"11198103",
            
        },
        {
            id: 5,
            name : "wash the house",
            phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 6,
            name : "elevetors check",
           phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 7,
            name : "elevetors check",
            phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 8,
            name : "elevetors check",
            phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 9,
            name : "elevetors check",
            phone: "0544340139",
            carNum:"11198103",
        },
        {
            id: 10,
            name : "elevetors check",
            phone: "0544340139",
            carNum:"11198103",
        }
    ]

    //const doneTasks = tasks.filter(item=>item.isDone) // ... => spread operator
    //doneTasks[0].isDone = false;
    //tasks[0].isDone = true;

    /*  Please don't !!!!
        const doneTasks_oldStyle = [];
        const copyArray = tasks.map(item=>doneTasks_oldStyle.push(item));
    */
    return (
        <div className="Main">
			<h1>Main</h1><hr/>
            <div id="kartzya">
                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/U8qUDoBt_Dg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
                {/*doneTasks.map(item=><div className="Box" key={item.id}>{item.name}<br/>{item.isDone?"done":"וואי עלייך"}<br/>{item.owner}</div>)*/}
                {Parking.map(item=><MyTask key={item.id}
                taskName={item.name} id={item.id}  phone={item.phone} carNum={item.carNum}/>)}
            </div>
            
        </div>
    );
}

export default Home;
