import * as mongoose from 'mongoose';
import { LoanSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Loan = mongoose.model('Loan', LoanSchema);

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
}