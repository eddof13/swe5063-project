<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            'name' => 'Breakfast',
            'type' => 'category',
            'image' => 'image/breakfast.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 1,
            'recipe_id' => 1
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 1,
            'recipe_id' => 4
        ]);

        DB::table('categories')->insert([
            'name' => 'Lunch',
            'type' => 'category',
            'image' => 'image/lunch.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 2,
            'recipe_id' => 2
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 2,
            'recipe_id' => 3
        ]);

        DB::table('categories')->insert([
            'name' => 'Dinner',
            'type' => 'category',
            'image' => 'image/dinner.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 3,
            'recipe_id' => 3
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 3,
            'recipe_id' => 3
        ]);

        DB::table('categories')->insert([
            'name' => 'Snack',
            'type' => 'category',
            'image' => 'image/snack.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 4,
            'recipe_id' => 4
        ]);

        DB::table('categories')->insert([
            'name' => 'Meat',
            'type' => 'ingredient',
            'image' => 'image/meat.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 5,
            'recipe_id' => 2
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 5,
            'recipe_id' => 3
        ]);

        DB::table('categories')->insert([
            'name' => 'Dairy',
            'type' => 'ingredient',
            'image' => 'image/dairy.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 6,
            'recipe_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Vegetable',
            'type' => 'ingredient',
            'image' => 'image/vegetable.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 7,
            'recipe_id' => 2
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 7,
            'recipe_id' => 3
        ]);

        DB::table('categories')->insert([
            'name' => 'Fruit',
            'type' => 'ingredient',
            'image' => 'image/fruit.jpg'
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 8,
            'recipe_id' => 1
        ]);

        DB::table('category_recipe')->insert([
            'category_id' => 8,
            'recipe_id' => 4
        ]);
    }
}
