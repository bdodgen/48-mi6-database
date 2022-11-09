@extends('layouts.main')

@section('content')

    <p>Here will be the Missions react app</p>

    <div id="root"></div>

    @viteReactRefresh
    @vite('resources/js/missions.jsx')

@endsection