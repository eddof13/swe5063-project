import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faList,faBowlRice,faStar } from '@fortawesome/free-solid-svg-icons';

export default function Recipes(props) {
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
            
                        <img style={{width:"100%", height:"100%", padding:"5%"}} src="https://www.thestrengthandconditioningcoach.com/uploads/1/1/6/6/116639141/published/welcome-on-board-52.png?1615200024">
                        </img>
                         
                    </div>
                    
                    <h1 className="flex justify-center mt-20 text-5xl font-extrabold text-gray-900 dark:text-white">
                        Recipes
                    </h1>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <a
                                href="https://laravel.com/docs"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white justify-center">
                                        Rasberry Oat Smoothie
                                    </h2>
                                    <img style={{width:"90%", height:"40%", padding:"3%", justify:"center"}} src="https://i.redd.it/g7m9mda5e5g41.jpg">
                        </img>
                               

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Ingredients:
                                    - 1/4 cup oats
                                    - 1 cup oat milk, or other vegan milk
                                    - 1/2 cup frozen raspberries
                                    - 1/4 cup frozen mango (or banana)
                                    - 1 scoop vanilla protein powder
                                    - Top with: fresh raspberries, banana, coconut flakes and granola</p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                     1. In a bowl add oats and 1/2 cup milk, mix to combine. Let soak in fridge overnight, or for at least 20 minutes.

                                     2. In a blender add frozen raspberries, frozen mango, protein powder, and soaked oats. 
                                        Add 1/2 more oat milk and blend until smooth and creamy. (Optional to add splashes more milk or water if needed for blending). 
                                        Pour smoothie into a bowl and add your favourite toppings.</p>
                                </div>

                            
                            </a>

                            <a
                                href="https://laracasts.com"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                    

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Chicken Shawarma Bowl
                                    </h2>
                                    <img style={{width:"90%", height:"40%", padding:"3%", justify:"center"}} src="https://www.joyfulhealthyeats.com/wp-content/uploads/2018/07/Chicken-Shawarma-Bowls-web-2-500x500.jpg">
                        </img>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Indgredients: For the Garlic Yogurt Sauce
                                    Greek Yogurt: Be sure to use plain Greek yogurt to avoid adding an unwanted flavor to the sauce.
                                    Lemon Juice: Freshly squeezed.
                                    Garlic Cloves: Pressed or finely minced.
                                    Cumin
                                    Salt & Pepper: To taste.
                                    For the Bowls
                                    Quinoa: Cooked.
                                    Diced Cucumber
                                    Zucchini: Sliced lengthwise.
                                    Sliced Cherry Tomatoes
                                    Sliced Romaine Lettuce
                                    </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Combine Sauce Ingredients: Add the greek yogurt, lemon juice, garlic cloves, cumin, salt and pepper to a small bowl. Use a spoon to stir everything together.
                                    Prep for Grilling: Heat the grill to medium-high heat, about 375-400°F. Spray the grill grates with cooking spray.
                                    Grill Chicken & Zucchini: Place the marinated chicken onto the grill along with the zucchini slices. Grill the zucchini for 2-3 minutes per side. Cook the chicken shawarma for 5-7 minutes per side, until the breasts are no longer pink. Let the chicken sit for 5 minutes, then slice it.
                                        </p>
                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Add half a cup of the sliced romaine, half a cup of the cooked quinoa, 1 zucchini slice, 1/4 cup of the cherry tomatoes, 1/4 cup of the diced cucumber and 3-4 ounces of sliced chicken to each bowl.
                                    </p>
                                    </div>
                            </a>

                            <a
                                href="https://laravel.com/docs"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white justify-center">
                                        Chicken and Asparagus Skillet
                                    </h2>
                                    <img style={{width:"90%", height:"40%", padding:"3%", justify:"center"}} src="https://i.pinimg.com/originals/9d/ff/d8/9dffd839be2949898498644ec26a959f.jpg">
                        </img>
                               

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Ingredients:
                                    - Skinless boneless chicken breasts – or chicken tights is that you like.
                                    - Salt and black pepper 
                                    - Garlic powder
                                    - Coconut aminos – or low sodium soy sauce.
                                    - Chicken broth
                                    - Tapioca starch – or corn starch
                                    - Ginger – ground or fresh
                                    - Cayenne pepper – The cayenne pepper adds a subtle spicy kick to this recipe. If you don’t like the heat, feel free to avoid this ingredient.
                                    - Olive oil
                                    - Garlic
                                    - Mushroom
                                    - Asparagus
                                    - Scallions
                                    - Sesame seeds
                                  </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    1. Season chicken with salt, pepper and garlic powder.
                                    2. Mix coconut aminos, chicken broth, tapioca starch, ginger and cayenne pepper in a small bowl until well combined and no lumps.
                                    3. Heat 2 tablespoons of oil in a large skillet over medium-high heat. Add chicken and cook about 8 -10 minutes or until chicken is no longer pink and cooked, stirring occasionally. Remove chicken from the skillet and reserve.
                                    4. Add the remaining 2 tablespoons of oil to the same skillet. Add garlic and sauté, stirring constantly, until fragrant, about 1 minute. Add mushrooms and asparagus and cook until slightly tender, about 5 minutes. Return the chicken to the pan and stir in the reserved coconut aminos mixture; toss to heat through. Bring to a full boil to thicken.
                                    5. Garnish with sliced and scallions and sesame seed, if desired.
                                    6. Server with mashed potatoes, white rice, quinoa, or vegetables.</p>
                                </div>

                            
                            </a>

                            <a
                                href="https://laravel.com/docs"
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                            >
                                <div>
                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white justify-center">
                                        Granola Apple Bites 
                                    </h2>
                                    <img style={{width:"90%", height:"40%", padding:"3%", justify:"center"}} src="https://static.wixstatic.com/media/26357d_721c82a00d364a34bf3c9207dda3de2b~mv2_d_6000_4000_s_4_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg">
                        </img>
                               

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Ingredients:
                                    - 2 apples, sliced into wedges 
                                    - ¼ cup (60 mL) hazelnut butter 
                                    - ¼ cup (30 g) vegan granola
                                    - ¼ tsp ground cinnamon
                                    - 1.4 oz (40 g) dairy-free dark chocolate
                                    </p>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Directions:
                                    Lightly coat the apple wedges in hazelnut butter, then press the wedges into a plate of granola. Sprinkle cinnamon over the wedges.
                                    Melt the chocolate in a microwave at 600W, stirring every 20 seconds until the chocolate is just fully melted. Be careful not to overheat.
                                    Drizzle the wedges with melted dark chocolate. Enjoy!
                                    Storage</p>
                                </div>

                            
                            </a>

                        </div>
                    </div>
                        
                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/sponsors/taylorotwell"
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
