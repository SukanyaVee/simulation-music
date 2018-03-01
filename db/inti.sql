SELECT * FROM pg_catalog.pg_tables;


CREATE TABLE IF NOT EXISTS music_sim_songs 
(
id SERIAL PRIMARY KEY,
title TEXT,
artist TEXT,
album TEXT 
);

CREATE TABLE IF NOT EXISTS music_sim_users (
id SERIAL PRIMARY KEY,
name TEXT,
login TEXT,
passcode TEXT
);

CREATE TABLE IF NOT EXISTS music_sim_playlist (
    id SERIAL PRIMARY KEY,
    playlist_name TEXT, 
    user_id INTEGER REFERENCES music_sim_users (id),
    song_id INTEGER REFERENCES music_sim_songs (id)
);

CREATE TABLE music_sim_payment (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES music_sim_users (id),
    credit INTEGER,
    CVV INTEGER,
    expiry DATE
);

INSERT INTO music_sim_payment
(user_id, credit, CVV, expiry)
VALUES
(1, 6011737347467373, 123, 2001-12-12),
(2, 5011738732654273, 456, 2023-01-01);

INSERT INTO music_sim_songs
(title, artist, album)
VALUES
('song1','artist1','album1'),
('song2','artist1','album1'),
('song3','artist1','album1'),
('song4','artist1','album1'),
('song5','artist1','album2'),
('song6','artist1','album2'),
('song7','artist1','album2'),
('song8','artist1','album2'),
('song1','artist2','album3'),
('song2','artist2','album3'),
('song3','artist2','album3'),
('song4','artist2','album3'),
('song5','artist2','album4'),
('song6','artist2','album4'),
('song7','artist2','album4'),
('song8','artist2','album4');

INSERT INTO music_sim_users
(name, login, passcode)
VALUES
('User1', 'user1','pass1'),
('User2', 'user2','pass2'),
('User3', 'user3','pass3'),
('User4', 'user4','pass4');

INSERT INTO music_sim_playlist
(playlist_name, user_id, song_id)
VALUES
('fav1',1,2),
('fav1',1,3),
('fav1',1,5),
('fav1',1,7),
('fav1',1,16),
('fav2',1,14),
('fav3',1,12),
('fav4',2,5),
('fav4',2,7),
('fav4',2,16);

SELECT * FROM music_sim_songs;
SELECT * FROM music_sim_users;
SELECT * FROM music_sim_playlist;

SELECT * from music_sim_playlist WHERE song_id NOT IN (SELECT id FROM music_sim_songs WHERE album='album1');