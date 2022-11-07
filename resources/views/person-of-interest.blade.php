@extends('layouts.main')

@section('content')
    <h3>One person of interest - one with the ID {{ $personId }}</h3>
    {{-- we hide the person ID in the blade so that React application can read it --}}
    <input type="hidden" name="person_id" value={{ $personId }}>
    <div id="react-app">
        
    </div>

    @viteReactRefresh
    @vite('resources/js/person-of-interest.jsx')

@endsection