create TABLE paragraph (
	id int PRIMARY KEY AUTO_INCREMENT,
	content TEXT DEFAULT "",
    part_id int
)

CREATE TABLE part (
	id int PRIMARY KEY AUTO_INCREMENT,
    post_id int,
    FOREIGN KEY(post_id ) REFERENCES post(id),
    url_image varchar(255)
)

create table post (
	id int PRIMARY KEY AUTO_INCREMENT,
    author varchar(100) DEFAULT "",
    thumbnail varchar(256) DEFAULT "",
)
 alter table paragraph add foreign key (part_id) 
 references part(id)
 alter table post add COLUMN name varchar(100)

alter table part add COLUMN part_name varchar(200) 