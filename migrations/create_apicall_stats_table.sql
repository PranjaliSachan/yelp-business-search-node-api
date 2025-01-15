CREATE TABLE apicall_stats (
	id uuid PRIMARY KEY NOT NULL,
	service_name varchar(50) NOT NULL,
	client_ip varchar(100),
	timestamp timestamp NOT NULL
);