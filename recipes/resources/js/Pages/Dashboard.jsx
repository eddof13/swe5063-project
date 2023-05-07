import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faList,faBowlRice,faStar } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                    <h1 style={{float:"left", display:'inline-block'}} className="flex justify-center mt-20 text-4xl font-extrabold text-gray-900 dark:text-white">

                    </h1>
                        <img style={{width:"220%", height:"70%", padding:"3%"}} src="https://elitenutritionandperformance.com/wp-content/uploads/2018/10/AdobeStock_165223618.jpeg">
                        </img>

                    </div>

                    <h1 className="flex justify-center mt-20 text-7xl font-extrabold text-gray-900 dark:text-white">
                        Sarah Matos
                    </h1>


                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5"></div>

                            <a
                                href="https://laracasts.com"
                                className="scale-30 p-4 bg-white dark:bg-gray-400/50 dark:bg-gradient-to-bl from-gray-400/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500
                                healthy2.jpg"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="Ingredients App">
                                    <FontAwesomeIcon icon={faBowlRice} />
                                 </div>
                                    </div>
                                    <img style={{width:"80%", height:"60%", padding:"3%", justify:"center"}} src="https://risegatherings.com/wp-content/uploads/2018/04/Food-grid-650-v2.jpg">
                        </img>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                       Saved Recipes
                                    </h2>
                                </div>

                            </a>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5"></div>

                            <a
                                href="Create"
                                className="scale-30 p-4 bg-white dark:bg-gray-400/50 dark:bg-gradient-to-bl from-gray-400/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500
                                healthy2.jpg"
                            >
                                <div>
                                    <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                                    <div className="Ingredients App">
                                    <FontAwesomeIcon icon={faBowlRice} />
                                 </div>
                                    </div>
                                    <img style={{width:"60%", height:"60%", padding:"3%", justify:"center"}} src="https://thumbs.dreamstime.com/b/recipe-book-linear-icon-modern-outline-logo-concept-white-background-kitchen-collection-suitable-use-web-apps-mobile-133522235.jpg">
                        </img>
                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                       Create New Recipes
                                    </h2>
                                </div>




                            </a>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
        </AuthenticatedLayout>
    );
}
