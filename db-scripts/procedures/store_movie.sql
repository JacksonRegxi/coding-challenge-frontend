delimiter //
create procedure store_movie(
	in title varchar(255),
    in topic varchar(255),
    in releaseYear int,
    in image text,
    in summary text,
    in available bool
)
begin
	insert into movie 
		(title, topic, releaseYear, image, summary, available) 
	values 
		(title, topic, releaseYear, image, summary, available);
end //


