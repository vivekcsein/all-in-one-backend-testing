import { createApp } from "./app/app";


const PORT = Number(process.env.PORT) || 7164;

const app = createApp();

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});