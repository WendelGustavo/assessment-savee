const data = [
    { id: 1, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 2, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 3, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 4, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 5, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 6, title: "Example for a2 collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 7, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 8, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 9, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 10, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 11, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 12, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 13, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 14, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 15, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 16, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 17, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 18, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 19, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" },
    { id: 20, title: "Example for a collection", genre: "Action", releaseDate: "2021-09-01", rating: 5, overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.", posterImage: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" }, 
];

interface Movie {
    id: number;
    title: string;
    genre: string;
    releaseDate: string;
    rating: number;
    overview: string;
    posterImage: string;
}

export const resolvers = {
    Query: {
        movies: async () => {
            return data;
        },
        movie: async (_: any, { id }: { id: number }) => {
            return data.find((movieArray: Movie) => movieArray.id == id);
        },
        movieByTitle: async (_: any, { title }: { title: string }) => {
            return data.filter((movieArray: Movie) => movieArray.title.includes(title));
        },
    },
};