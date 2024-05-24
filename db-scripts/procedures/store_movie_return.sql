delimiter //
create procedure store_movie_return(
	in movie_id int,
    in customer_id int,
    in available bool
)
begin
	insert into moviereturn 
		(movie_id, customer_id, available) 
	values 
		(movie_id, customer_id, available);
        
        update movie set available = available where id = movie_id;
end //

call store_movie_return(1, 4, false)