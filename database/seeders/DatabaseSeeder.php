<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Folder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            $user=UserSeeder::class,
        ]);

        Folder::factory(10)->create();
    }
}