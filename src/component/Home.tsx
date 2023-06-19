import { useEffect, useState } from "react";
import "./Home.style.css";
import { IMovie, PageEnum } from "./Movie.type";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
const Home = () => {

    const [movieList, setMovieList] = useState([] as IMovie[]);

    const [shownPage, setShownPage] = useState(PageEnum.list);

    const [dataEdit, setdataEdit] = useState({} as IMovie);

    useEffect(() => {
        const list = window.localStorage.getItem("MovieList")
        if(list){
            _setMovieList(JSON.parse(list));
        }
    }, []);

    const onAddMovieClickHnd = () => {
        setShownPage(PageEnum.add);
    }
    const showListPage = () => {
        setShownPage(PageEnum.list);
    }
    const _setMovieList = (list:IMovie[]) => {
        setMovieList(list);
        window.localStorage.setItem("MovieList", JSON.stringify(list))
    }
    const addMovie = (data: IMovie) => {
        _setMovieList([...movieList, data]);
    }
    const deleteMovie = (data: IMovie) => {
        const indexMovieDelete = movieList.indexOf(data);
        const tempList = [...movieList]

        tempList.splice(indexMovieDelete, 1);
        _setMovieList(tempList)

     }
     const editMovie = (data: IMovie) => {
        setShownPage(PageEnum.edit);
        setdataEdit(data);
     }
     const updateData = (data: IMovie) => {
        const filteredData = movieList.filter(x => x.id === data.id)[0];
        const indexMovieData = movieList.indexOf(filteredData);
        const tempList = [...movieList];
        tempList[indexMovieData] = data;
        _setMovieList(tempList);
     }

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Filmų sąrašas</h1>
                </header>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        
                        <MovieList list={movieList} onDeleteClickHnd={deleteMovie} onEditClickHnd={editMovie}/>
                        <input type="button" value="Add a movie" onClick={onAddMovieClickHnd} className = "add-movie-btn"/>
                    </>
                )}
                {shownPage === PageEnum.add && (
                <AddMovie onBackBtnClickHnd={showListPage} onSubmitClickHnd={addMovie} />)}

                {shownPage === PageEnum.edit && <EditMovie data={dataEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}
            </section>
           





        </>
    );
};
export default Home;