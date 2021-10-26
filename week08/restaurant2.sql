-- CREATE TABLE restaurant (
--     id SERIAL PRIMARY KEY,
--     name varchar(35),
--     address varchar(150),
--     category varchar(20)
-- );

-- CREATE TABLE reviewer (
--     id SERIAL PRIMARY KEY,
--     name varchar(25),
--     email varchar(50),
--     karma integer CHECK (karma >= 0 and karma <= 7)
-- );

-- CREATE TABLE review (
--     id SERIAL PRIMARY KEY,
--     reviewer_id integer REFERENCES reviewer(id),
--     stars numeric CHECK (stars >=0 and stars <= 5),
--     title varchar (30),
--     review varchar,
--     restaurant_id integer REFERENCES restaurant(id)
-- );

-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'Spice of Thai', '580 E Crossville Rd Suite #420, Roswell, GA 30075', 'Thai'),
-- (DEFAULT, 'Señor Patron', '3005 Old Alabama Rd #2000, Johns Creek, GA 30022', 'Mexican'),
-- (DEFAULT, 'Bambinellis Italian', '2500 Old Alabama Rd, Roswell, GA 30076', 'Italian'),
-- (DEFAULT, 'From the Earth Brewing Company', '1570 Holcomb Bridge Rd, Roswell, GA 30076', 'American'),
-- (DEFAULT, 'Spiced Right Ribhouse', '635 S Atlanta St, Roswell, GA 30075', 'Barbeque'),
-- (DEFAULT, 'The Mill Kitchen and Bar', '590 Mimosa Blvd, Roswell, GA 30075', 'American'),
-- (DEFAULT, 'Osteria Mattone', '1095 Canton St, Roswell, GA 30075', 'Italian'),
-- (DEFAULT, 'Adeles on Canton', '1169 Canton St, Roswell, GA 30075', 'Cajun'),
-- (DEFAULT, 'Lolas Burger & Tequila Bar', '944 Canton St, Roswell, GA 30075', 'American'),
-- (DEFAULT, '1920 Tavern', '948 Canton St, Roswell, GA 30075', 'American');

-- INSERT INTO reviewer VALUES 
-- (DEFAULT, 'Karen', 'OGkaren@gmail.com', 1),
-- (DEFAULT, 'Starla', 'starla63@gmail.com', 6),
-- (DEFAULT, 'Eric', 'eric_the_reviewer@gmail.com', 5),
-- (DEFAULT, 'Carl', 'carl_writes_reviews@gmail.com', 7),
-- (DEFAULT, 'Melanie', 'mellie_reviews@gmail.com', 4);

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 1, 'Might be the worst ever', 'Do you call this Thai food? My two-year-old makes better food in my kitchen. I would rather eat McDonalds. I will never eat here again.', 1),
-- (DEFAULT, 1, 1, 'Actually the worst', 'I have said it before, but this goes without saying what I am about to say right now. This food is actually the worst I have ever eaten. Mudpies are better.', 2),
-- (DEFAULT, 1, 1, 'You call this Italian?', 'Their pizza was like eating straw from a stable. I have nothing else to say here', 3),
-- (DEFAULT, 1, 1, 'At least there was beer', 'The food was horrendous, but at least the beer was palatable. Come for the beer. Leave when you get hungry.', 4),
-- (DEFAULT, 2, 4, 'Nice atmosphere!', 'I enjoyed the Porch Song IPA along with my burger. Five stars for atmosphere, food pairings, waiter knowledge, and drinks selection. I subtracted one star because I requested my burger done "medium," and they served it "well done."', 4),
-- (DEFAULT, 2, 5, 'Excellent breakfast', 'I stopped by here on a whim one fine Saturday morning with the family. I ordered the Smoked Brisket, Egg, and Cheese Biscuit. My husband had the Three Eggs breakfast plate, and the kids ordered the Fried Chicken Biscuit. We all greatly enjoyed our food. Five stars all around!', 5),
-- (DEFAULT, 2, 3, 'A nice lunch', 'My coworkers and I came here for lunch the other day. The food was wonderful, and the restaurant was decorated nicely. I only wish service had been a bit faster, but they seemed short-staffed that day. I would definitely give this place another chance.', 6),
-- (DEFAULT, 2, 5, 'A Wonderful dinner', 'You have GOT to try the Duck Confit. They also have a wonderful selection of beer, wine, and spirits. Such a fun atmosphere with live music and cornhole outside. This a great place to gather with friends, stop by for date night, or just pass the time.', 4),
-- (DEFAULT, 3, 4.5, 'Nice dinner', 'I put in a reservation here for date night, and I am so glad I did. We enjoyed the food offerings and service. The wine selection was a little limited, but otherwise, we had a great experience.', 6),
-- (DEFAULT, 3, 5, 'The best Italian!', 'We started with the Burrata and Polpette, followed by our main courses of the Branzino and Maiale. To round things out, we finished our meal with the Budino Caramellato. The waiter recommended perfect wine pairings for each of our choices. I cannot emphasize enough what a wonderful experience we had here. If I could leave more than five stars, I would.', 7),
-- (DEFAULT, 3, 5, 'Loved the Pad Thai', 'The Pad Thai was perfect. I also enjoyed the Tom Kha soup. An excellent choice for Thai food in this area.', 1),
-- (DEFAULT, 4, 4.5, 'A great experience', 'I had a wonderful evening here with my significant other. We are still thinking about the bread pudding. 10/10 would come back to enjoy again.', 7),
-- (DEFAULT, 4, 5, 'Great lunch', 'I enjoyed a cup of the shrimp creole and an oyster po boy for lunch here. Great food and atmosphere at a great price in Downtown Roswell', 8),
-- (DEFAULT, 4, 5, 'Awesome Tacos', 'The menu has a great selection of tacos to choose from. I opted for the Acapulco Tacos and was not disappointed. Great food, great service.', 2),
-- (DEFAULT, 4, 4, 'Great Pizza', 'They have a wonderful selection of pizzas to choose from. You could probably choose any and be delighted. I subtracted one star for slightly slow service, as there were few people in the restaurant at the time (5:00pm; please do not judge me for eating dinner so early...).', 3),
-- (DEFAULT, 5, 4, 'What fun!', 'Burgers and tequila are two of my favorite things, so when I saw that some genius had built a restaurant idea off of them, I just had to try it out for myself. I had the burger and a great margarita. My friends enjoyed a variety from other burgers to the empanadas and nachos. We had a great time here. They will take care of you.', 9),
-- (DEFAULT, 5, 5, 'Lovely dinner', 'The Chilean Sea Bass was perfect in every way. The wine pairings recommended by our waiter were excellent. Do not forget to order the Grand Marnier Chocolate Truffle Cake', 10),
-- (DEFAULT, 5, 5, 'Just Wonderful', 'I greatly enjoyed the Green Curry Chicken. They did not hold back on the spice, and that is exactly what I am looking for at a good Thai restaurant', 1);


-- List all the reviews for a given restaurant given a specific restaurant ID.
-- Select restaurant.id, review FROM review
-- INNER JOIN restaurant ON review.restaurant_id = restaurant.id
-- WHERE restaurant.id = 6;

-- List all the reviews for a given restaurant, given a specific restaurant name.
-- Select restaurant.id, restaurant.name, review FROM review
-- INNER JOIN restaurant ON review.restaurant_id = restaurant.id
-- WHERE restaurant.name = 'Spice of Thai';

-- List all the reviews for a given reviewer, given a specific author name.
-- Select reviewer.name, review.review FROM reviewer
-- INNER JOIN review ON reviewer.id = review.reviewer_id
-- WHERE reviewer.name = 'Karen';

-- List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
-- Select restaurant.name, review.review FROM restaurant
-- INNER JOIN review ON restaurant.id = review.restaurant_id
-- ORDER BY restaurant.name;

-- Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
-- SELECT restaurant.name, AVG(review.stars) FROM restaurant
-- INNER JOIN review ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.name;

-- Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
-- SELECT restaurant.name, COUNT(review.review) FROM restaurant
-- INNER JOIN review ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.name;

-- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
-- SELECT restaurant.name, review.review, reviewer.name FROM review
-- INNER JOIN restaurant ON review.restaurant_id = restaurant.id
-- INNER JOIN reviewer ON review.reviewer_id = reviewer.id;

-- Get the average stars given by each reviewer. (reviewer name, average star rating)
-- SELECT reviewer.name, AVG(review.stars) FROM review
-- INNER JOIN reviewer ON review.reviewer_id = reviewer.id
-- GROUP BY reviewer.name;

-- Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
-- SELECT reviewer.name, MIN(review.stars) FROM review
-- INNER JOIN reviewer ON review.reviewer_id = reviewer.id
-- GROUP BY reviewer.name;

-- Get the number of restaurants in each category. (category name, restaurant count)
-- SELECT restaurant.category, COUNT(restaurant.category) FROM restaurant
-- GROUP BY restaurant.category;

-- Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
-- SELECT restaurant.name, COUNT(review.stars = 5) FROM review
-- INNER JOIN restaurant ON review.restaurant_id = restaurant.id
-- GROUP BY restaurant.name;

-- Get the average star rating for a food category. (category name, average star rating)
-- SELECT restaurant.category, AVG(stars) FROM restaurant
-- INNER JOIN review ON restaurant.id = review.restaurant_id
-- GROUP BY restaurant.category;