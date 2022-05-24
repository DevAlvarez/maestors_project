<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Maestro>
 */

class MaestroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $suffix = [
            'Maestro tipo Canal televisión',
            'Maestro tipo Hostelería',
            'Maestro tipo Sanidad',
            'Maestro tipo Deportes',
            'Maestro tipo Transporte',
            'Maestro tipo Ocio Tiempo libre',
            'Maestro tipo Rentas',
            'Maestro tipo Juego',
            'Maestro tipo Radio'
        ];
        return [
            'nombre' => $this->faker->city . ' '. Arr::random($suffix),
            'descripcion' => $this->faker->text(),
        ];
    }
}
