@extends('layouts.main')

@section('content')
    <h3>All people of interest</h3>
    <div>
        Name: {{$peopleOfInterest[3]->name}}
        <a href="{{ action([App\Http\Controllers\PeopleController::class, 'show'], $peopleOfInterest[3]->id) }}">Detail</a>
    </div>
    <div id="react-app"></div>

    @viteReactRefresh
    @vite('resources/js/people-of-interest.jsx')

@endsection