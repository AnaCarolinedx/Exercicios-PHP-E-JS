<?php
$nome = "Seu Nome";
$idade = 25;
echo "Nome: $nome, Idade: $idade<br>";

// 2.
$a = 8;
$b = 7;
echo "Soma: " . ($a + $b) . "<br>";

// 3.
$s1 = "Olá, ";
$s2 = "mundo!";
echo $s1 . $s2 . "<br>";

// 4.
echo "Comentários demonstrados.<br>";

// 5.
$x = 15;
$y = 4;
echo "Soma: " . ($x + $y) . "<br>";
echo "Subtração: " . ($x - $y) . "<br>";
echo "Multiplicação: " . ($x * $y) . "<br>";
echo "Divisão: " . ($x / $y) . "<br>";
echo "Módulo: " . ($x % $y) . "<br>";

// 6.
$num = 11;
echo $num % 2 == 0 ? "$num é par<br>" : "$num é ímpar<br>";

// 7.
$int = 10;
$str = "10";
var_dump($int == $str); 
var_dump($int === $str);

// 8.
$str2 = "texto";
$int2 = 3;
$float = 3.14;
$bool = true;
var_dump($str2, $int2, $float, $bool);

// 9.
$c = 20;
$f = ($c * 9/5) + 32;
echo "$c °C = $f °F<br>";

// 10.
$n1 = 6;
$n2 = 8;
$n3 = 7;
$media = ($n1 + $n2 + $n3) / 3;
echo "Média: $media<br>";
if ($media >= 7) {
    echo "Aluno aprovado com média $media";
} else {
    echo "Aluno reprovado com média $media";
}
?>
