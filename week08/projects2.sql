-- Write queries to find the answers below:

-- What are all projects that use JavaScript?
-- SELECT tech.name, project.name FROM project_uses_tech
-- INNER JOIN project ON project_uses_tech.project_id = project.id 
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
-- WHERE tech.name = 'JavaScript';

-- What are all technologies used by the Personal Website?
-- SELECT project.name, tech.name FROM project_uses_tech
-- INNER JOIN project ON project_uses_tech.project_id = project.id 
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
-- WHERE project.name = 'Personal Website';

-- Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?
-- SELECT tech.name, project_uses_tech.project_id FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id;
-- -- answer: Ruby, JavaScript, Java

-- Based on the previous query, get the count of the number of techs used by each project.
-- SELECT project_uses_tech.project_id, COUNT(tech.name) FROM tech
-- LEFT OUTER JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
-- GROUP BY project_uses_tech.project_id;

-- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?
-- SELECT project.name, project_uses_tech.tech_id FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_uses_tech.project_id;
-- -- Answer: Whiteboard Exercises

-- Based on the previous query, get the count of the number of projects that use each tech.
-- SELECT project_uses_tech.tech_id, COUNT(project.name) FROM project
-- LEFT OUTER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- GROUP BY project_uses_tech.tech_id;

-- List all projects along with each technology used by it. You will need to do a three-way join.
-- SELECT project.name, tech.name FROM project_uses_tech
-- INNER JOIN project ON project_uses_tech.project_id = project.id
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id
-- ORDER BY project.name;

-- List all the distinct techs that are used by at least one project.
-- SELECT DISTINCT tech_id, tech.name FROM project_uses_tech
-- INNER JOIN tech ON project_uses_tech.tech_id = tech.id;

-- List all the distinct techs that are not used by any projects.
-- SELECT tech.name FROM tech 
-- WHERE tech.id NOT IN 
-- (SELECT tech_id FROM project_uses_tech);

-- List all the distinct projects that use at least one tech.
-- SELECT DISTINCT project_id, project.name FROM project_uses_tech
-- INNER JOIN project ON project_uses_tech.project_id = project.id;

-- List all the distinct projects that use no tech.
-- SELECT project.name from project
-- WHERE project.id NOT IN
-- (SELECT project_id FROM project_uses_tech);

-- Order the projects by how many tech it uses.
-- SELECT project.name, COUNT(tech_id) FROM project
-- INNER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
-- GROUP BY project.name
-- ORDER BY COUNT(tech_id) DESC;

-- Order the tech by how many projects use it.
-- SELECT tech.name, COUNT(project_id) FROM tech
-- INNER JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
-- GROUP BY tech.name
-- ORDER BY COUNT(project_id) DESC;

-- What is the average number of techs used by a project?
