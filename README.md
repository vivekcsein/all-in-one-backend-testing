// vercel build works here in two configs

// version 1 for creating this project

// vercel.json
{
"version": 2,
"builds": [
{
"src": "api/index.ts",
"use": "@vercel/node"
}
],
"routes": [
{
"src": "/(.*)",
"dest": "api/index.ts"
}
]
}

//package.json
type": "module",

//tsconfig.json
"target": "ES2022",
"module": "Preserve",
"moduleResolution": "Bundler",

// version 2 for creating this project

//vercel.json

{
"version": 2,
"routes": [
{
"src": "/(.*)",
"dest": "api/index.ts"
}
]
}
