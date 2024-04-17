<?php

$hostname = "cetak";
$peserta = "database";
$pass = "";
$databasename = "belajarphp";

$connection = new mysqli($hostname, $peserta, $pass, $databasename) or die("gagal terhubung");

$sql = "SELECT `id`, `nama_peserta`, `kelas`, `nomor_urut` FROM `sekolahcoding`.`bab_1_sekolah_coding` WHERE  `id`=4";

$query= $connection->query($sql);

if ($query->num_rows != 0) {
    //iterasi data
    while($row = $query->fetch_assoc()) {
        var_dump($row);
    }
}