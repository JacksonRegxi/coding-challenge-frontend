delimiter //
create procedure get_movies_available(in is_available bool)
begin
	select * from movie where available = is_available;
end //

call get_movies_available(true);