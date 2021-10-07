USE sql11442892 ;

-- User

CREATE TABLE IF NOT EXISTS users(
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

CREATE TABLE Categories(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
Primary key ( id)
);

-- FundraiserPost



-- Contributions



-- BloodPost
CREATE TABLE IF NOT EXISTS bloodpost(
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    FOREIGN KEY (user_id ) REFERENCES users(id),
    PRIMARY KEY (id)
);




-- HospitalTable

