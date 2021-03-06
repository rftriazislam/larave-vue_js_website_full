<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />

    <title>Blog</title>

    <link href="/css/main.css" type="text/css" rel="stylesheet" />

<script>

(function(){
    window.Laravel={ 
        csrfToken:'{{csrf_token()}}'
    };
})();
</script>


</head>

<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>