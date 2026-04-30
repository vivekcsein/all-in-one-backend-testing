import express from "express";

export function createApp() {
    const app = express();

    // Core middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Health route
    app.get("/health", (_req, res) => {
        res.status(200).json({
            status: "ok",
            message: "Server is running"
        });
    });

    // Example API route
    app.get("/", (_req, res) => {
        res.json({
            success: true,
            message: "Hello World!"
        });
    });

    return app;
}