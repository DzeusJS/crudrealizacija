export interface IMovie{
    id: string;
    name: string;
}

// export const dummyMovieList : IMovie[] = [{
//     id: new Date().toJSON().toString(),
//     name: "belekas"
// }]

export enum PageEnum {
    list,
    add,
    edit
}