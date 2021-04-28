CREATE DATABASE journals;
\c journals

create table users (
    id INT PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

insert into users (id, username, email, password) values
    (1,'bfrulla','bfrulla@mail.umw.edu', 'test'),
    (2,'jhilker','jhilker@mail.umw.edu', 'test'),
    (3,'dlambo','dlambertson@mail.umw.edu', 'test'),
    (4,'bmarg','bmarg@mail.umw.edu', 'test'),
    (5,'lmaldonado','lmaldonado@mail.umw.edu', 'test');

create table journals (
    id SERIAL PRIMARY KEY,
    u_id INT references users(id),
    entryId INT /**pretty sure this is not needed*/
);

insert into journals (id, u_id, entryId) values
    (1, 1, 1),
    (2, 2, 1),
    (3, 3, 1),
    (4, 4, 1),
    (5, 5, 1)
    ;

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

insert into journalEntries (journalID, u_id, publicity, id, category, date_created, entry_body, last_modified, activity_level, engagement_level, published) values
    (1, 1, true, 1, 'hello', '2021-03-28','Lorem ipsum dolor sit amet.','2021-03-28',5,2,true),
    (2, 2, true, 1, 'hello', '2021-03-28','Lorem ipsum dolor sit amet.','2021-03-28',2,5,true),
    (3, 3, true, 1, 'hello', '2021-03-28','Lorem ipsum dolor sit amet.','2021-03-28',3,7,true),
    (4, 4, false, 1, 'hello', '2021-03-28','I want this post to be private.','2021-03-28',2,2,true),
    (1, 4, false, 1, 'hello', '2021-03-28','I want this post to be a private draft.','2021-03-28',2,2,false),
    (2, 4, true, 1, 'hello', '2021-03-28','I want this post to be a public draft.','2021-03-28',2,2,false);


/*
// Post Request
INSERT INTO journalEntries (journalID, u_id, publicity, id, category, date_created, entry_body, last_modified, activity_level, engagement_level, published) values
(journalID, userID, f, ,'', Date.now, userText, Date.now, userInput, userInput, t);

*/