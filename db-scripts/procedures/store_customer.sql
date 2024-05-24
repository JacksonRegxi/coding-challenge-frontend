delimiter //
create procedure store_customer(
	in customerName varchar(255),
    in lastname varchar(255),
    in phone varchar(20),
    in email varchar(50)
)
begin
	insert into customer 
		(customerName, lastname, phone, email) 
	values 
		(customerName, lastname, phone, email);
end //

