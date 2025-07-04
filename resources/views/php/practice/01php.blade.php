
<!DOCTYPE html>
<html class="{{ session('theme', 'light') }}">
    <style>

        /* app.css */
body.light {
    background: white;
    color: black;
}
body.dark {
    background: #111;
    color: white;
}

    </style>
<head>
    @vite('resources/css/app.css')
</head>
<body class="bg-white dark:bg-gray-900 text-black dark:text-white">
    <div class="p-4">
        <button id="themeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
            Toggle Theme
        </button>

        <!-- <h1 class="mt-4 text-xl">Hello, Dark Mode!</h1> -->
    </div>

    <script>
        // document.addEventListener('DOMContentLoaded', function () {
        //     const themeToggle = document.getElementById('themeToggle');
        //     const root = document.documentElement;

        //     // Load from localStorage
        //     if (localStorage.getItem('theme') === 'dark') {
        //         root.classList.add('dark');
        //     } else {
        //         root.classList.remove('dark');
        //     }

        //     themeToggle.addEventListener('click', function () {
        //         if (root.classList.contains('dark')) {
        //             root.classList.remove('dark');
        //             localStorage.setItem('theme', 'light');
        //         } else {
        //             root.classList.add('dark');
        //             localStorage.setItem('theme', 'dark');
        //         }
        //     });
        // });
    </script>

    <script>
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    document.getElementById('themeToggle').addEventListener('click', () => {
        body.classList.toggle('dark');
        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
</script>
<?php
class sll{
    
}

?>

</body>
</html>


