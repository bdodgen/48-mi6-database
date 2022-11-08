<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Person;
use App\Http\Controllers\Controller;

class PeopleController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status');

        if ($status) {
            $peopleOfInterest = Person::with('missions')->where('status_id', $status)->get();
        }
        else {
            $peopleOfInterest = Person::with('missions')->get();
        }

        return $peopleOfInterest;
    }

}
