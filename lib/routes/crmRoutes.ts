
import {Request, Response} from "express";
import { LoanController, DrawdownScheduleController, SystemAddedDataController } from "../controllers/crmController";
import app from "../app";


export class Routes {
    
    public loanController: LoanController = new LoanController();
    public drawdownSheduleController: DrawdownScheduleController = new DrawdownScheduleController();
    public systemAddedDataController: SystemAddedDataController = new SystemAddedDataController();
   
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response)=> {
            res.status(200).send({
                message: 'GET request successfull!'
            })
        })

        //Loan details
        app.route('/loan')
        .get(this.loanController.getLoans)
        .post(this.loanController.addNewLoan)

        app.route('/loan/:loanId')
        .get(this.loanController.getLoanWithID)
        .put(this.loanController.updateLoan)
        .delete(this.loanController.deleteLoan)

        //Drawdown Schedule
        app.route('/drawdownSchedule')
        .get(this.drawdownSheduleController.getDrawdownSchedule)
        .post(this.drawdownSheduleController.addNewDrawdownSchedule)

        app.route('/drawdownSchedule/:drawdownScheduleId')
        .get(this.drawdownSheduleController.getDrawdownScheduleWithID)
        .put(this.drawdownSheduleController.updateDrawdownSchedule)
        .delete(this.drawdownSheduleController.deleteDrawdownSchedule)

        //SystemAddedData
        app.route('/systemAddedData')
        .get(this.systemAddedDataController.getSystemAddedData)
        .post(this.systemAddedDataController.addNewSystemAddedData)

        app.route('/systemAddedData/:systemAddedDataId')
        .get(this.systemAddedDataController.getSystemAddedDataWithID)
        .put(this.systemAddedDataController.updateSystemAddedData)
        .delete(this.systemAddedDataController.deleteSystemAddedData)
    }
        
}
