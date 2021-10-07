USE MERAKI_Academy_Project_5;

-- User

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    age INT(3) NOT NULL,
    img VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Categories



-- FundraiserPost



-- Contributions



-- BloodPost



-- HospitalTable

