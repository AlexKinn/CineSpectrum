import { rest } from 'msw';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

export const handlers = [
    rest.get((process.env.REACT_APP_API_URL ?? "http://localhost:8080") +  "/trendingMedia", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(data.response)
        )
    })
];

const mockData = {
    
}