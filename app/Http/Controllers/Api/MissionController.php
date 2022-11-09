<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Validation\Rule;

class MissionController extends Controller
{
    public function find($id) {
        $mission = Mission::find($id);

        return $mission;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'year' => 'required|integer',
            'outcome' => [
                'nullable',
                Rule::in(['', '1', '0'])
            ]
        ]);

        $data = $request->all();

        if (empty($data['id'])) {
            // creating a new mission
            $mission = new Mission;
        } else {
            // updating an existing mission
            $mission = Mission::findOrFail($data['id']);
        }

        // fill the object with data from request
        $mission->name = $data['name'];
        $mission->year = $data['year'];
        $mission->outcome = $data['outcome'];

        // save the object into the database
        $mission->save();

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            'mission' => $mission
        ];
    }
}
