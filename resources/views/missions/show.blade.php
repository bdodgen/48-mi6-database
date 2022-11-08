@extends('layouts.main')

@section('content')
    <div id="react-app">
        <div id="returned-app-component">
        </div>
    </div>

    @viteReactRefresh
    @vite('resources/js/people-of-interest.jsx')
@endsection