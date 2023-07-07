import { useContext } from "react";
import StateContext from "../StateContext";


const List = () => {
    const {data } = useContext(StateContext);
    console.log(data);
    return(
        <ul className="list-group">
            {data.map(el => {
                return(
                    <li className={ el.important ?  "list-group-item-danger list-group-item" : "list-group-item-info list-group-item"}>
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{el.title}</label>
              </li>
                )
            })}
        </ul>
    )
};
export default List;