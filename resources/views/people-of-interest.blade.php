@extends('layouts.main')

@section('content')
    <h3>All people of interest</h3>
    <div>
        <a href="{{ action([App\Http\Controllers\PeopleController::class, 'index']) }}">Detail</a>
    </div>
    <div id="react-app"></div>

    @viteReactRefresh
    @vite('resources/js/people-of-interest.jsx')

@endsection