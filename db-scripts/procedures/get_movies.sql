delimiter //
create procedure get_movies()
begin
	select * from movie;
end //

call get_movies();