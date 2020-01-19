import express from 'express';

class ServerApplication {
    
    private app: Express.Application;
    private router: express.Router;

    constructor() {
        this.app = express();
        this.router = express.Router();
    }

    private routes() {
        let router: express.Router;
        router = express.Router();

        router.get("/", (req, res) => {
            console.log('hey hey');
        });
    }

}

const Server: ServerApplication = new ServerApplication();