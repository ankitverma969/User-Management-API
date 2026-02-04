import app from "./app.js";

const PORT = 5051;
app.listen(PORT, ()  => {
    console.log(`Server is running http://localhost:${PORT}`);
});