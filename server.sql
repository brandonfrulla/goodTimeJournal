CREATE DATABASE journals;
\c journals

create table users (
    id INT PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

create table journals (
    id SERIAL PRIMARY KEY,
    u_id INT references users(id),
    entryId INT
);

create table journalEntries (
    journalID INT references journals(id),
    u_id INT references users(id),
    publicity BOOLEAN NOT NULL,
    id SERIAL,
    category TEXT,
    date_created DATE,
    entry_body TEXT NOT NULL,
    last_modified DATE,
    activity_level INT NOT NULL,
    engagement_level INT NOT NULL,
    published BOOLEAN,
    PRIMARY KEY(u_id, journalID)
);