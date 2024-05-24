delimiter //
create procedure get_movies_customers()
begin
	select c.customerName, c.id as customerId, m.title, m.id as movieId from customer c, movie m;
end //


call get_movies_customers();