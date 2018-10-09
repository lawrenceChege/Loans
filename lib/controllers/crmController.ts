import * as mongoose from 'mongoose';
import { LoanSchema, DrawdownScheduleSchema, systemAddedDataSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Loan = mongoose.model('Loan', LoanSchema);
const DrawdownSchedule = mongoose.model('Drawdown', DrawdownScheduleSchema);

export class DrawdownScheduleController{
    public addNewDrawdownSchedule (req: Request, res: Response){
        let newDrawdownSchedule = new DrawdownSchedule(req.body);

        newDrawdownSchedule.save((err, drawdownschedule)=>{
            if(err){
                res.send(err);
            }
            res.json(drawdownschedule);
        })
    }
    public getLoans (req: Request, res: Response){
        DrawdownSchedule.find({}, (err, loan)=>{
            if(err){
                res.send(err);
            }
            res.json(loan);
        });
    }
    public getDrawdownScheduleWithID (req: Request, res: Response){
        DrawdownSchedule.findById(req.params.drawdownScheduleId, (err, drawdownschedule)=>{
            if(err){
                res.send(err);
            }
            res.json(drawdownschedule);
        });
    }
    public updateDrawdownSchedule (req: Request, res: Response){
        DrawdownSchedule.findOneAndUpdate({_id: req.params.drawdownScheduleId}, req.body,
        {new: true}, (err, drawdownschedule) => {
            if(err){
                res.send(err);
            }
            res.json(drawdownschedule);
        });
    }
    public deleteDrawdownSchedule (req: Request, res: Response){
        DrawdownSchedule.findOneAndDelete({_id: req.params.drawdownScheduleId},
        (err) => {
            if(err){
                res.send(err);
            }
            let message = "Drawdown Schedule successfully deleted"
            res.json(message);
        });
    }
}

export class LoanController{
    public addNewLoan (req: Request, res: Response){
        let newLoan = new Loan(req.body);

        newLoan.save((err, loan)=>{
            if (err){
                res.send(err);
            }
            res.json(loan);
        });
    }
    public getLoans (req: Request, res: Response){
        Loan.find({}, (err, loan)=>{
            if(err){
                res.send(err);
            }
            res.json(loan);
        });
    }
    public getLoanWithID (req: Request, res: Response){
        Loan.findById(req.params.loanId, (err, loan)=>{
            if(err){
                res.send(err);
            }
            res.json(loan);
        });
    }
    public updateLoan (req: Request, res: Response){
        Loan.findOneAndUpdate({_id: req.params.loanId}, req.body,
        {new: true}, (err, loan) => {
            if(err){
                res.send(err);
            }
            res.json(loan);
        });
    }
    public deleteLoan (req: Request, res: Response){
        Loan.findOneAndDelete({_id: req.params.loanId},
        (err) => {
            if(err){
                res.send(err);
            }
            let message = "Loan successfully deleted"
            res.json(message);
        });
    }
}