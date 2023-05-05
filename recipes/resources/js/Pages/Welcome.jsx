import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faList,faBowlRice,faStar } from '@fortawesome/free-solid-svg-icons';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                    <h1 style={{float:"left", display:'inline-block'}} className="flex justify-center mt-20 text-4xl font-extrabold text-gray-900 dark:text-white">

                    </h1>
                        <img style={{width:"220%", height:"70%", padding:"3%"}} src="https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg">
                        </img>

                    </div>

                    <h1 className="flex justify-center mt-20 text-7xl font-extrabold text-gray-900 dark:text-white">
                        Quick Recipe
                    </h1>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <a
                                href="Categories"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="Category App">
                                    <FontAwesomeIcon icon={faList} />
                                 </div>
                                    </div>

                                    <img style={{width:"160%", height:"50%", padding:"3%", justify:"center"}} src="https://cdn.quizly.co/wp-content/uploads/2018/04/05211504/116.jpg">
                        </img>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Categories
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Pick what category you would like to choose from.
                                    </p>
                                </div>
                            </a>

                            <a
                                href="Ingredients"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500
                                healthy2.jpg"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="Ingredients App">
                                    <FontAwesomeIcon icon={faBowlRice} />
                                 </div>
                                    </div>
                                    <img style={{width:"125%", height:"50%", padding:"3%", justify:"center"}} src="https://www.seoclerk.com/pics/502447-3jpPhn1483443794.jpg">
                                    </img>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Ingredients
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                       Find what ingreditents you can use to make an incredible meal.
                                    </p>
                                </div>


                            </a>

                            <a
                                href="Recipes"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="TopRated App">
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                    </div>
                                    <img style={{width:"300%", height:"60%", padding:"3%", justify:"center"}} src="https://i0.wp.com/selfrootedworld.com/wp-content/uploads/2020/05/Healthy-Breakfast-ideas-for-weight-loss.jpg?fit=960%2C640&ssl=1">
                                    </img>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Recipes
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        View the highest ranked recipes here!
                                    </p>
                                </div>

                            </a>

                            <a
                                href="Toprated"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="TopRated App">
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                    </div>
                                    <img style={{width:"125%", height:"60%", padding:"3%", justify:"center"}} src="https://www.healthdigest.com/img/gallery/7-foods-to-eat-and-7-to-avoid-when-you-have-ibs/eat-fish-1622653318.jpg">
                        </img>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Top Rated
                                    </h2>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Look at the highest ranked recipe!
                                    </p>
                                </div>

                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
