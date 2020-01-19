import express, { Application, Request, Response } from 'express';

class ServerApplication {
    
    public express: Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes(): void {
        const router = express.Router();
        
        router.get('/', (req: Request, res: Response) => {
            res.send('Working');
        });
    }

}

export default new ServerApplication().express;