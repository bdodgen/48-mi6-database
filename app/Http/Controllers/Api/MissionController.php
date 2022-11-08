<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mission;

class MissionController extends Controller
{
    public function find($id) {
        $mission = Mission::find($id);

        return $mission;
    }

    public function store(Request $request) {
        $data = $request->all();
        $mission = Mission::find($data['id']);

        $mission->name = $data['name'];
        $mission->year = $data['year'];
        $mission->outcome = $data['outcome'];
        
        $mission->save();

    }
}
