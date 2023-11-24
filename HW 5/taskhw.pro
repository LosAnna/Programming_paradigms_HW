% Program

sum_list([], 0).
sum_list([H|T], Sum) :-
sum_list(T, Sum0),
Sum is H + Sum0.

% Run

?- sum_list([1,2,3,4,5], Sum).