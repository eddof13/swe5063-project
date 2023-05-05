import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faList,faBowlRice,faStar } from '@fortawesome/free-solid-svg-icons';

export default function TopRated(props) {
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

                        <a href="/"><img style={{width:"100%", height:"100%", padding: "6%"}} src="https://biophytopharm.com/wp-content/uploads/2020/08/Top-10-Benefits-of-Eating-Healthy-Foods.jpg">
                        </img></a>

                    </div>

                    <h1 className="flex justify-center mt-20 text-6xl font-extrabold text-gray-900 dark:text-white">
                        Top Rated
                    </h1>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <a
                                href="https://laravel.com/docs"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white justify-center">
                                        5 STAR
                                    </h2>
                                    <img style={{width:"80%", height:"30%", padding: "3%"}} src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/healthy-salmon-collection-main-image-9c68365.jpg?quality=90&resize=768,574">
                        </img>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Sesame Salmon, Broccoli, & Sweet Potato Mashed
                                    </p>

                                     <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        Ingedients:
                                           - 1 ½ tbsp sesame oil
                                           - 1 tbsp low-salt soy sauce
                                           - thumb-sized piece ginger, grated
                                           - 1 garlic clove, crushed
                                           - 1 tsp honey
                                           - 2 sweet potatoes, scrubbed and cut into wedges
                                           - 1 lime, cut into wedges
                                           - 2 boneless skinless salmon fillets
                                           - 250g purple sprouting broccoli
                                           - 1 tbsp sesame seeds
                                           - 1 red chilli, thinly sliced (deseeded if you don't like it too hot)
                                    </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        1.Heat oven to 200C/180 fan/ gas 6 and line a baking tray with parchment.
                                        Mix together 1/2 tbsp sesame oil, the soy, ginger, garlic and honey.
                                        Put the sweet potato wedges, skin and all, into a glass bowl with the lime wedges.
                                        Cover with cling film and microwave on high for 12-14 mins until completely soft.
                                    </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        2.Meanwhile, spread the broccoli and salmon out on the baking tray.
                                        Spoon over the marinade and season.
                                        Roast in the oven for 10-12 mins, then sprinkle over the sesame seeds.
                                    </p>
                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        3.Remove the lime wedges and roughly mash the sweet potato using a fork.
                                        Mix in the remaining sesame oil, the chilli and some seasoning.
                                        Divide between plates, along with the salmon and broccoli.
                                    </p>

                                </div>
                            </a>

                            <a
                                href="https://laracasts.com"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        4 STAR
                                    </h2>
                                    <img style={{width:"100%", height:"30%", padding: "3%"}} src="https://i.pinimg.com/originals/a3/ae/af/a3aeafc0bc75e8c6ccdadf444665e49f.png">
                        </img>
                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Ingredients:
                                    - 1/2 cup Hidden Valley® Original Ranch® Dressing
                                    - 1 teaspoon Dijon mustard
                                    - 8 ounces cooked chicken, diced
                                    - 1 cup seedless red grapes, halved
                                    - 1 cup diced celery
                                    - 1/2 cup chopped toasted pecans
                                    - 2 green onions, white and green parts, finely chopped
                                    </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    1.In a small bowl, combine the dressing and mustard and stir until well blended.
                                    2.In a large bowl, the chicken, grapes, celery, pecans and green onion.
                                    Add the dressing to the salad and toss until evenly coated. Chill covered for two hours before serving.
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
