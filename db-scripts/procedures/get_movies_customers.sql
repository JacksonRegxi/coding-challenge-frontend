delimiter //
create procedure store_movies_customers(
	in movie_id int,
    in customer_id int,
    in loanDate date,
    in returndate date
)
begin
	insert into loan 
		(movie_id, customer_id, loanDate, returnDate) 
	values 
		(movie_id, customer_id, loanDate, returnDate);
        
        update movie set available = 0 where id = movie_id;
end //

call store_movies_customers(1, 4, "2000-12-12", "2000-12-12")