<?php
    $NomeUsuario = $_POST['nome'];
    $EmailUsuario = $_POST['email'];
    $TelUsuario = $_POST['tel'];
    $MsgUsuario = $_POST['msg'];
    
    $dbHost = '127.0.0.1';
    $dbUserName = 'root';
    $dbPassword = 'mysql';
    $dbName = 'cadastro';
    
    $conection = mysqli_connect($dbHost, $dbUserName, $dbPassword, $dbName);

    /*if ($conection->connect_error) {
        die("Error");
    } else {
         echo "Sucesso:" . $NomeUsuario;
    } */

    $sql = "INSERT INTO clientes (nome, email, telefone, mensagem) VALUES ('$NomeUsuario', '$EmailUsuario', '$TelUsuario', '$MsgUsuario')";
        
    if ($conection->query($sql) == true) {
        echo "dados enviados com sucesso";
    } else {
        echo "Error o inserir dados";
    }
?>