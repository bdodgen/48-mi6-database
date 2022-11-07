<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PeopleController extends Controller
{
    public function index()
    {
        $peopleOfInterest = Person::get();
        return view('people-of-interest', compact('peopleOfInterest'));
    }

    public function show($personId)
    {
        return view('person-of-interest', compact('personId'));
    }
}
