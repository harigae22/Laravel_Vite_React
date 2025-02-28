<!-- resources/views/react.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React in Laravel</title>
</head>
<body>
    <div id="react-root"></div> <!-- ここにReactコンポーネントが表示されます -->

    @vite(['resources/js/app.jsx', 'resources/css/app.css']) <!-- Vite で React と CSS を読み込み -->
</body>
</html>
