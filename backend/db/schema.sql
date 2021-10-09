USE sql11442892 ;

-- users

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    age INT(3) NOT NULL,
    img VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    country VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

--categories
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    Primary key (id)
);

--campaigns
CREATE TABLE IF NOT EXISTS campaigns (
    id INT AUTO_INCREMENT NOT NULL,
    userid INT,
    country VARCHAR(255) NOT NULL,
    type INT NOT NULL,
    target INT NOT NULL,
    img VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (type) REFERENCES categories(id),
    FOREIGN KEY (userid ) REFERENCES users(id),
    Primary key (id)
);

--contributions
CREATE TABLE IF NOT EXISTS contributions(
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    campaign_id INT,
    category_id INT,
    created_at DATETIME,
    amount INT,
    FOREIGN KEY (campaign_id ) REFERENCES campaigns(id),
    FOREIGN KEY (user_id ) REFERENCES users(id),
    FOREIGN KEY (category_id ) REFERENCES categories(id),
    Primary key (id)
);

--bloodpost
CREATE TABLE IF NOT EXISTS bloodpost(
    id INT AUTO_INCREMENT NOT NULL,
    user_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    FOREIGN KEY (user_id ) REFERENCES users(id),
    PRIMARY KEY (id)
);

--HospitalTable
CREATE TABLE IF NOT EXISTS HospitalTable(
    id INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255) NOT NULL,  
    user_id INT,
    Amount INT NOT NULL,
    BankAccount VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id ) REFERENCES users(id),
    PRIMARY KEY (id)
);