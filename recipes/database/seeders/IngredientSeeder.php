<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ingredients')->insert([
            'name' => 'oats',
            'quantity' => '1/4 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'oat milk, or other vegan milk',
            'quantity' => '1 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'frozen raspberries',
            'quantity' => '1/2 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'frozen mango (or banana)',
            'quantity' => '1/4 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'vanilla protein powder',
            'quantity' => '1 scoop'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'fresh raspberries, banana, coconut flakes and granola',
            'quantity' => 'topping'
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 1,
            'recipe_id' => 1
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 2,
            'recipe_id' => 1
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 3,
            'recipe_id' => 1
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 4,
            'recipe_id' => 1
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 5,
            'recipe_id' => 1
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 6,
            'recipe_id' => 1
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Greek Yogurt: Be sure to use plain Greek yogurt to avoid adding an unwanted flavor to the sauce.',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Lemon Juice: Freshly squeezed',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Garlic Cloves: Pressed or finely minced',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'cumin',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Salt & Pepper: To taste',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Quinoa: Cooked',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Diced Cucumber',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Zucchini: Sliced lengthwise',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Sliced Cherry Tomatoes',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Sliced Romaine Lettuce',
            'quantity' => ''
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 7,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 8,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 9,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 10,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 11,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 12,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 13,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 14,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 15,
            'recipe_id' => 2
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 16,
            'recipe_id' => 2
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Skinless boneless chicken breasts – or chicken tights is that you like.',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Salt and black pepper',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Garlic powder',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Coconut aminos – or low sodium soy sauce',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Chicken broth',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Tapioca starch – or corn starch',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Ginger – ground or fresh',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Cayenne pepper – The cayenne pepper adds a subtle spicy kick to this recipe. If you don’t like the heat, feel free to avoid this ingredient.',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Olive oil',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Garlic',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Mushroom',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Asparagus',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Scallions',
            'quantity' => ''
        ]);

        DB::table('ingredients')->insert([
            'name' => 'Sesame Seeds',
            'quantity' => ''
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 17,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 18,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 19,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 20,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 21,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 22,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 23,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 24,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 25,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 26,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 27,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 28,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 29,
            'recipe_id' => 3
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 30,
            'recipe_id' => 3
        ]);

        DB::table('ingredients')->insert([
            'name' => 'apples, sliced into wedges',
            'quantity' => '2'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'hazelnut butter',
            'quantity' => '1/4 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'vegan granola',
            'quantity' => '1/4 cup'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'ground cinnamon',
            'quantity' => '1/4 tsp'
        ]);

        DB::table('ingredients')->insert([
            'name' => 'dairy-free dark chocolate',
            'quantity' => '1.4 oz'
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 31,
            'recipe_id' => 4
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 32,
            'recipe_id' => 4
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 33,
            'recipe_id' => 4
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 34,
            'recipe_id' => 4
        ]);

        DB::table('ingredient_recipe')->insert([
            'ingredient_id' => 35,
            'recipe_id' => 4
        ]);
    }
}
