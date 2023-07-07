import Form from "../components/Form";
import List from "../components/List";
import '../css/Todo.css'

const Todo = () => {
    return(
        <div className="container d-flex justify-content-evenly align-items-center fullpage todo m-auto">
            <div className="col-md-5">
                <List />
            </div>
            <div className="col-md-5">
                <Form/>
            </div>
        </div>
    )
}
export default Todo;