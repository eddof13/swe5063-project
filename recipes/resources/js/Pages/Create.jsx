import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faList,faBowlRice,faStar } from '@fortawesome/free-solid-svg-icons';

export default function Create(props) {
    return (
        <>
            <Head title="Create" />
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
                     
                         
                    </div>
                    
                    <h1 className="flex justify-center mt-20 text-7xl font-extrabold text-gray-900 dark:text-white">
                       Create New Recipe
                    </h1>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                            <a
                                href="Create"
                                className="scale-100 p-6 bg-white dark:bg-gray-700/50 dark:bg-gradient-to-bl from-gray-600/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500 flex justify-center"
                            >
                                <div>
                                <div className="flex items-center justify-center rounded-full">
                                <div className="Create App">
                                 </div>
                                    </div>
                                    <img style={{width:"150%", height:"60%", padding:"3%", justify:"center"}} src="https://static.thenounproject.com/png/187803-200.png">
                        </img>
            
                                    <label for="qrtitle">Recipe Title:</label>
                                    <input type="text" id="qrtitle" placeholder="Enter Recipe Title" maxlength="10"></input>
                                    
                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        
                                    </p>

                                    <label for="qringredients">Ingredients:</label>
                                    <input type="text" id="qringredients" placeholder="Enter Ingredients" maxlength="100"></input>
                      
                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                       
                                    </p>

                                    <label for="qrinstructions">Instructions:</label>
                                    <input type="text" id="qrinstructions" placeholder="Enter Instructions" maxlength="200"></input>
                                    

        
                                </div>

                            </a>

                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                            <div className="flex items-center gap-4">
                                <a
                                    href="Toprated"
                                    className="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                        
                                    Sponsor
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                            Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
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
