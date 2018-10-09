
import {Request, Response} from "express";
import { LoanController } from "../controllers/crmController";
import app from "../app";


export class Routes {
    
    public contactController: LoanController = new LoanController();
   
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response)=> {
            res.status(200).send({
                message: 'GET request successfull!'
            })
        })

        //contact
        app.route('/loan')
        .get(this.contactController.getLoans)
        .post(this.contactController.addNewLoan);

        app.route('/loan/:loanId')
        .get(this.contactController.getLoanWithID)
        .put(this.contactController.updateLoan)
        
    }
        
}
