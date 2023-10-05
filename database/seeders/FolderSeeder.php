<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FolderSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('folders')->insert([
            [
            'user_id' => 1,
            'name'=>'テストフォルダ1',
            'is_public'=>'1',
            ],
            [
            'user_id' => 2,
            'name'=>'テストフォルダ2',
            'is_public'=>'0',
            ],
            [
            'user_id' => 1,
            'name'=>'テストフォルダ3',
            'is_public'=>'0',
            ],
        ]);
    }
}
