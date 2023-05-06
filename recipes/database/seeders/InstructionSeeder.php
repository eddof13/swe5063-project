<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InstructionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('instructions')->insert([
            'recipe_id' => 1,
            'text' => 'In a bowl add oats and 1/2 cup milk, mix to combine. Let soak in fridge overnight, or for at least 20 minutes.',
            'order' => '1'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 1,
            'text' => 'In a blender add frozen raspberries, frozen mango, protein powder, and soaked oats.',
            'order' => '2'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 1,
            'text' => 'Add 1/2 more oat milk and blend until smooth and creamy. (Optional to add splashes more milk or water if needed for blending).',
            'order' => '3'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 1,
            'text' => 'Pour smoothie into a bowl and add your favourite toppings.',
            'order' => '4'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Combine Sauce Ingredients: Add the greek yogurt, lemon juice, garlic cloves, cumin, salt and pepper to a small bowl. Use a spoon to stir everything together.',
            'order' => '1'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Prep for Grilling: Heat the grill to medium-high heat, about 375-400°F. Spray the grill grates with cooking spray.',
            'order' => '2'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Grill Chicken & Zucchini: Place the marinated chicken onto the grill along with the zucchini slices.',
            'order' => '3'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Grill the zucchini for 2-3 minutes per side.',
            'order' => '4'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Cook the chicken shawarma for 5-7 minutes per side, until the breasts are no longer pink.',
            'order' => '5'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Let the chicken sit for 5 minutes, then slice it.',
            'order' => '6'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 2,
            'text' => 'Add half a cup of the sliced romaine, half a cup of the cooked quinoa, 1 zucchini slice, 1/4 cup of the cherry tomatoes, 1/4 cup of the diced cucumber and 3-4 ounces of sliced chicken to each bowl.',
            'order' => '7'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Season chicken with salt, pepper and garlic powder.',
            'order' => '1'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Mix coconut aminos, chicken broth, tapioca starch, ginger and cayenne pepper in a small bowl until well combined and no lumps.',
            'order' => '2'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Heat 2 tablespoons of oil in a large skillet over medium-high heat. Add chicken and cook about 8 -10 minutes or until chicken is no longer pink and cooked, stirring occasionally. Remove chicken from the skillet and reserve.',
            'order' => '3'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Add the remaining 2 tablespoons of oil to the same skillet. Add garlic and sauté, stirring constantly, until fragrant, about 1 minute. Add mushrooms and asparagus and cook until slightly tender, about 5 minutes. Return the chicken to the pan and stir in the reserved coconut aminos mixture; toss to heat through. Bring to a full boil to thicken.',
            'order' => '4'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Garnish with sliced and scallions and sesame seed, if desired.',
            'order' => '5'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 3,
            'text' => 'Serve with mashed potatoes, white rice, quinoa, or vegetables.',
            'order' => '6'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 4,
            'text' => 'Lightly coat the apple wedges in hazelnut butter, then press the wedges into a plate of granola. Sprinkle cinnamon over the wedges.',
            'order' => '1'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 4,
            'text' => 'Melt the chocolate in a microwave at 600W, stirring every 20 seconds until the chocolate is just fully melted. Be careful not to overheat.',
            'order' => '2'
        ]);

        DB::table('instructions')->insert([
            'recipe_id' => 4,
            'text' => 'Drizzle the wedges with melted dark chocolate. Enjoy!',
            'order' => '3'
        ]);
    }
}
