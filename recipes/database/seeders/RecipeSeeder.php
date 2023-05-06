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
            'description' => 'A delicious and healthy smoothie',
            'photo' => 'https://i.redd.it/g7m9mda5e5g41.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Chicken Shawarma Bowl',
            'description' => 'Mediterreanean flavor',
            'photo' => 'https://www.joyfulhealthyeats.com/wp-content/uploads/2018/07/Chicken-Shawarma-Bowls-web-2-500x500.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Chicken and Asparagus Skillet',
            'description' => 'Good source of protein',
            'photo' => 'https://i.pinimg.com/originals/9d/ff/d8/9dffd839be2949898498644ec26a959f.jpg',
            'user_id' => 1
        ]);

        DB::table('recipes')->insert([
            'name' => 'Granola Apple Bites',
            'description' => 'This ons is the favorite of vegans everywhere',
            'photo' => 'https://i.redd.it/g7m9mda5e5g41.jpg',
            'user_id' => 1
        ]);
    }
}
