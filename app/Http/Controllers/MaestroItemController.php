<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Http\Resources\MaestroItemIndexResource;
use App\Models\Maestro;
use Illuminate\Http\Request;

class MaestroItemController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($id, Request $request)
    {
        $maestro = Maestro::findOrFail($id);
        //return $maestro->items()->get();

        return MaestroItemIndexResource::collection(
            $maestro->items()->get()
        );

    }
}
