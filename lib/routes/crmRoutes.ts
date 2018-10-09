
import {Request, Response} from "express";
import { LoanController } from "../controllers/crmController";
import app from "../app";


export class Routes {
    
    public loanController: LoanController = new LoanController();
   
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response)=> {
            res.status(200).send({
                message: 'GET request successfull!'
            })
        })

        //contact
        app.route('/loan')
        .get(this.loanController.getLoans)
        .post(this.loanController.addNewLoan);

        app.route('/loan/:loanId')
        .get(this.loanController.getLoanWithID)
        .put(this.loanController.updateLoan)
        .delete(this.loanController.deleteLoan)
        
    }
        
}
