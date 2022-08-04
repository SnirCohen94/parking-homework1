import "./MyTask.css";

interface MyTaskProps {
	id?:number;

    taskName:string;
    phone?:string;
    carNum?:string;
}

function MyTask(props: MyTaskProps): JSX.Element {
    return (
        <div className="Box MyTask">
            <h1>{props.id}</h1> <hr />
			{props.taskName} <br />
            {props.phone} <br />
            {props.carNum} <br />
            {/*{props.taskName}<br/>*/}
        </div>
    );
}

export default MyTask;
