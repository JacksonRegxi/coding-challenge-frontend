delimiter //
create procedure get_customers()
begin
	select * from customer;
end //

call get_customers();