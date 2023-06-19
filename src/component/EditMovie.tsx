import { IMovie } from "./Movie.type";
import "./MovieForm.style.css";
import { useState } from "react";
type Props = {
    data: IMovie;
    onBackBtnClickHnd: () => void
    onUpdateClickHnd: (data: IMovie) => void
}
const EditMovie = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
    const [name, setName] = useState(data.name)
    const onNameChangeHnd = (e: any) => {
        setName(e.target.value)
    }
    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: IMovie = {
            id: data.id,
            name: name
        }
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();
    }
    return <div className="form-container">
        <div>
            <h3>Filmo pridejimo formos puslapis</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
            <div>
                <label> Name : </label>
                <input type="text" value={name} onChange={onNameChangeHnd} required/>
            </div>

            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                <input type="submit" value="Update movie" />

            </div>
        </form>
    </div>
}
export default EditMovie;