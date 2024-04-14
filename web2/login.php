<?php
// Ellenőrizzük, hogy a POST kérés beküldte-e a felhasználónevet és a jelszót
if(isset($_POST['username']) && isset($_POST['password'])) {
    // Olvassuk be a password.txt fájlt
    $lines = file("password.txt", FILE_IGNORE_NEW_LINES);

    // Vegyük ki a felhasználó által megadott adatokat
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Ellenőrizzük, hogy a felhasználónév-jelszó páros megtalálható-e a fájlban
    foreach($lines as $line) {
        list($storedUsername, $storedPassword) = explode("*", $line);
        if($username === $storedUsername && $password === $storedPassword) {
            echo "Sikeres bejelentkezés!";
            exit; // Kilépünk a szkriptből, mert találtunk egy megegyezést
        }
    }
    // Ha nem találtunk egyezést, akkor hibaüzenetet jelenítünk meg
    echo "Hibás felhasználónév vagy jelszó!";
} else {
    // Ha a felhasználó nem küldte el a megfelelő adatokat, átirányítjuk őket a bejelentkezési oldalra
    header("Location: index.php");
    exit;
}
?>