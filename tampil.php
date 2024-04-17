<?php

if(isset($_GET['page'])) {

    $page = $_GET['page'];
    switch ($page) {
        case 'lihat' :
            include 'views/Enter email';
            break;

        case 'melihat' :
            include 'views/Enter password';
            break;  
    }

}else{

    include 'views/melihat.php';

}

?>