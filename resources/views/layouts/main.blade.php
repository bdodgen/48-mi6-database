<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/js/bootstrap.js')

    @vite('resources/css/style.css')
</head>
<body>
    <div class="nav-bar">
        <img class="seal" src="/images/mi6-seal.png" alt="">
        <a href='/'>Home</a>
        <a href="{{ route('people') }}">People of Interest</a>
        <a href="{{ route('missions.app') }}">Missions</a>
        <div class="visibility-toggle">&lt;</div>
    </div>
    <div class="content">
        @yield('content')
        {{-- @yield('head')
        <p>collar</p>
        @yield('left-arm')
        @yield('right-arm')
        @yield('body') --}}
    </div>

    <script>
        const navBar = document.querySelector(".nav-bar")
        const navBarToggle = document.querySelector('.visibility-toggle')
        navBarToggle.addEventListener('click', () => {
            navBarToggle.textContent = navBarToggle.textContent == '<' ? '>' : '<'
            navBar.classList.toggle('hidden')
        })
    </script>
</body>
</html>