-- CREATE TABLE countries (
--     code CHAR(2) NOT NULL,
--     year INT NOT NULL,
--     gdp_per_capita DECIMAL(10, 2) NOT NULL, govt_debt DECIMAL(10, 2) NOT NULL
-- );

-- Please write the SQL statement to show the top 3 average government debts in percent of the gdp_per_capita (govt_debt / gdp_per_capita) for those countries of which gdp_per_capita was over 40,000 dollars in every year in the last four years.

SELECT code, avg(govt_debt)
FROM countries
WHERE year > 2018 
GROUP BY code
HAVING MIN(gdp_per_capita) >= 40000
ORDER BY 2 
DESC LIMIT 3