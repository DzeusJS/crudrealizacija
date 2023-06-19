import { useState } from "react";
import { IMovie } from "./Movie.type";
import "./MovieList.style.css";
import MovieModal from "./MovieModal";

type Props = {
    list: IMovie[]
    onDeleteClickHnd: (data : IMovie) => void
    onEditClickHnd: (data : IMovie) => void
};

const MovieList = (props: Props) => {
    const { list, onDeleteClickHnd, onEditClickHnd } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataShow, setDataShow] = useState(null as IMovie | null);
    const viewMovie = (data: IMovie) => {
        setDataShow(data)
        setShowModal(true)};
    const onCloseModal = () =>  {setShowModal(false)}
    
    return (
        <div>
            
            <table>
                <tr>
                    <th>Pavadinimas</th>
                    <th>Actions</th>

                </tr>
                {list.map(movie => {
                    return (
                        <tr key={movie.id}>
                            <td>{`${movie.name}`}</td>
                            <td>
                                <div>
                                    <input type="button" value="View" onClick={() => viewMovie(movie)}/>
                                    <input type="button" value="Edit" onClick={() => onEditClickHnd(movie)} />
                                    <input type="button" value="Delete" onClick={() => onDeleteClickHnd(movie)} />
                                </div>
                            </td>
                        </tr>
                    );
                })}

            </table>
            {showModal && dataShow !== null && <MovieModal onClose={onCloseModal} data={dataShow}/>}

        </div>
    );
}
export default MovieList;