
import { IMovie } from "./Movie.type"
import "./MovieModal.style.css"
type Props = {
    onClose: () => void
    data: IMovie
}
const MovieModal = (props: Props) => {
    const { onClose, data } = props
    return (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
        
            <h3>Movie data</h3>
            <div>
                <div>
                    <label>Id : {data.id}</label>
                </div>
                <div>
                    <label>Pavadinimas : {data.name}</label>
                </div>
            </div>
       
           

     </div>

     </div>
    );
}
export default MovieModal;