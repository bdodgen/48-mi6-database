@extends('layouts.main')

@section('content')
    <h3>One person of interest - one with the ID {{ $personId }}</h3>
    <div id="react-app">
        
    </div>

    @viteReactRefresh
    @vite('resources/js/person-of-interest.jsx')

@endsection