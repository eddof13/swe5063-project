<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('recipes')->insert([
            'name' => 'Raspberry Oat Smoothie',
            'description' => '
            Ingredients:
            - 1/4 cup oats
            - 1 cup oat milk, or other vegan milk
            - 1/2 cup frozen raspberries
            - 1/4 cup frozen mango (or banana)
            - 1 scoop vanilla protein powder
            - Top with: fresh raspberries, banana, coconut flakes and granola</p>

            <p>
             1. In a bowl add oats and 1/2 cup milk, mix to combine. Let soak in fridge overnight, or for at least 20 minutes.

             2. In a blender add frozen raspberries, frozen mango, protein powder, and soaked oats.
                Add 1/2 more oat milk and blend until smooth and creamy. (Optional to add splashes more milk or water if needed for blending).
                Pour smoothie into a bowl and add your favourite toppings.</p>',
            'photo' => 'https://i.redd.it/g7m9mda5e5g41.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Chicken Shawarma Bowl',
            'description' => '
            Ingredients: For the Garlic Yogurt Sauce
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

            <p>
            Combine Sauce Ingredients: Add the greek yogurt, lemon juice, garlic cloves, cumin, salt and pepper to a small bowl. Use a spoon to stir everything together.
            Prep for Grilling: Heat the grill to medium-high heat, about 375-400°F. Spray the grill grates with cooking spray.
            Grill Chicken & Zucchini: Place the marinated chicken onto the grill along with the zucchini slices. Grill the zucchini for 2-3 minutes per side. Cook the chicken shawarma for 5-7 minutes per side, until the breasts are no longer pink. Let the chicken sit for 5 minutes, then slice it.
                </p>
            <p>
            Add half a cup of the sliced romaine, half a cup of the cooked quinoa, 1 zucchini slice, 1/4 cup of the cherry tomatoes, 1/4 cup of the diced cucumber and 3-4 ounces of sliced chicken to each bowl.
            </p>
                ',
            'photo' => 'https://www.joyfulhealthyeats.com/wp-content/uploads/2018/07/Chicken-Shawarma-Bowls-web-2-500x500.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Chicken and Asparagus Skillet',
            'description' => '
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

                <p>
                1. Season chicken with salt, pepper and garlic powder.
                2. Mix coconut aminos, chicken broth, tapioca starch, ginger and cayenne pepper in a small bowl until well combined and no lumps.
                3. Heat 2 tablespoons of oil in a large skillet over medium-high heat. Add chicken and cook about 8 -10 minutes or until chicken is no longer pink and cooked, stirring occasionally. Remove chicken from the skillet and reserve.
                4. Add the remaining 2 tablespoons of oil to the same skillet. Add garlic and sauté, stirring constantly, until fragrant, about 1 minute. Add mushrooms and asparagus and cook until slightly tender, about 5 minutes. Return the chicken to the pan and stir in the reserved coconut aminos mixture; toss to heat through. Bring to a full boil to thicken.
                5. Garnish with sliced and scallions and sesame seed, if desired.
                6. Server with mashed potatoes, white rice, quinoa, or vegetables.</p>',
            'photo' => 'https://i.pinimg.com/originals/9d/ff/d8/9dffd839be2949898498644ec26a959f.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Granola Apple Bites',
            'description' => '
            <p>
            Ingredients:
            - 2 apples, sliced into wedges
            - ¼ cup (60 mL) hazelnut butter
            - ¼ cup (30 g) vegan granola
            - ¼ tsp ground cinnamon
            - 1.4 oz (40 g) dairy-free dark chocolate
            </p>

            <p>
            Directions:
            Lightly coat the apple wedges in hazelnut butter, then press the wedges into a plate of granola. Sprinkle cinnamon over the wedges.
            Melt the chocolate in a microwave at 600W, stirring every 20 seconds until the chocolate is just fully melted. Be careful not to overheat.
            Drizzle the wedges with melted dark chocolate. Enjoy!
            Storage</p>',
            'photo' => 'https://i.redd.it/g7m9mda5e5g41.jpg',
            'user_id' => 1
        ]);
    }
}
