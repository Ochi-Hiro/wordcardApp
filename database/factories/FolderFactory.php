<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\User;

class FolderFactory extends Factory
{
    public function definition(): array
    {
        $date=$this->faker->dateTimeBetween('-1year');

        return [
            'user_id' => $this->faker->numberBetween(1, 4),
            'name' => $this->faker->name(10),
            'is_public' => $this->faker->boolean(),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
