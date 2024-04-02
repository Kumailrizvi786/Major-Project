export const routes = (app) => {  
    app.get("/sayHello", (req, res) => {
        res.json({message: "Hello World"});
        }
    );
}