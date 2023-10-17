<h1 align="center">Collatz Conjecture📐</h1>

>Even the Smartest Mathematicians Can't Solve the Collatz Conjecture

<p>
  A problem posed by L. Collatz in 1937, also called the $3x+1$ mapping or $3n+1$ problem. Thwaites (1996) has offered a £1000 reward for resolving the conjecture. Let $a_0$ be an integer. Then one form of Collatz problem asks if iterating
  
$$
a_n = 
\ \begin{cases} 
      \frac{1}{2} a_{n-1} & a_{n-1} \ for \ a_{n-1} \ even \\
      \\
      3a_{n-1} + 1 & for \ 3a_{n-1} \ odd \\
   \end{cases}
\
$$

  always returns to 1 for positive $a_0$
</p>

<p>
  
For example consider number $n=7$ <br>
It is odd so $3n+1$ ie. $7\times3+1=22$ <br> 
now $22$ is even so $\frac{n}{2}$ ie. $\frac{22}{2}=11$ <br>
Continuing in same way we get sequence starting from 7
>7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

</p>
