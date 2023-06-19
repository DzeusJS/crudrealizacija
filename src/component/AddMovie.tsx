import { useState } from "react";
import "./MovieForm.style.css"
import { IMovie } from "./Movie.type";

type Props = {
    onBackBtnClickHnd: () => void
    onSubmitClickHnd: (data: IMovie) => void
}
const AddMovie = (props: Props) => {
    const [name, setName] = useState("")
    const onNameChangeHnd = (e: any) => {
        setName(e.target.value)
    }
    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const data: IMovie = {
            id: new Date().toJSON().toString(),
            name: name
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }
    const { onBackBtnClickHnd, onSubmitClickHnd } = props
    return (
        <div className="form-container">
            <div>
                <h3>Filmo pridejimo formos puslapis</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label> Name : </label>
                    <input type="text" value={name} onChange={onNameChangeHnd} required  />
                </div>

                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Add movie" />

                </div>
            </form>
        </div>
    );
};
export default AddMovie;