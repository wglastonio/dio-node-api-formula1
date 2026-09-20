import fastify from "fastify";

console.log("Projeto API Formula 1");

const server = fastify({ logger: true });

const teams = [
    { id: 1, name: "Mercedes", country: "Germany" },
    { id: 2, name: "Red Bull Racing", country: "Austria" },
    { id: 3, name: "Ferrari", country: "Italy" }
];

const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return {
        teams: teams
    };
});

server.get("/teams/:id", async (request, response) => {
    const { id } = request.params as { id: string };
    const team = teams.find(t => t.id === parseInt(id));
    if (!team) {
        response.type("application/json").code(404);
        return { error: "Team not found" };
    }
    response.type("application/json").code(200);
    return { team: team };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return {
        drivers: drivers
    };
});

server.get("/drivers/:id", async (request, response) => {
    const { id } = request.params as { id: string };
    const driver = drivers.find(d => d.id === parseInt(id));
    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" };
    }
    response.type("application/json").code(200);
    return { driver: driver };
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
