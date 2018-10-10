import * as mongoose from 'mongoose';
import { LoanSchema, DrawdownScheduleSchema, SystemAddedDataSchema, LoanScheduleSchema } from "../models/crmModel";
import { Request, Response } from "express";

const LoanSchedule = mongoose.model('loanSchedule', LoanScheduleSchema);

export class loanScheduleGenerator {
    public createLoanScheduleTable(){
        let startDate : Date = db.startDate;
        let endDate : Date = db.repaymentDate;
        let increment = moment(startDate).add(1, 'day');
        let diff : Number = moment(endDate) - moment(startDate);
        let drawdownDate : Date = db.drawdownDate
        for (startDate; diff; increment ){
            if (startDate=drawdownDate){
                function createDrawdownRow(){
                    let date = drawdownDate;
                }
            }
            function createInterestOneRow(){
                let interest =98;
            }
            function createInterestOneServicingRow(){

            }
            function createInterestTwoRow(){

            }
            function createInterestTwoServicingRow(){

            } else (startDate= repaymentDate){
                function createExitFeeRow(){

                }
                function createTotalInterestAccruedRow(){

                }
                function createTotalInterestOwed(){

                }
                function createTotalToBeRepaidRow(){

                }
            }
        }

    }
    
}

class calculateLoan {
    public getDrawdownDrawAmount(params:any) {
        
    }
    public getLendingFeesChargeAmount(){
        
    }
    public getLendingFeesServicingChargeAmount(){

    }
    public getOtherFeesChargeAmount(){

    }
    public getOtherFeesServicingChargeAmount(){

    }
    public getFirstInterestAmount(){

    }
    public getFirstInterestServicingAmount(){

    }
    public getSecondInterestAmount(){

    }
    public getSecondInterestServicingAmount(){

    }
    public getFirstLoanBalance(){

    }
    public getSecondLoanBalance(){

    }
    public getBalanceDrawn(){

    }
    public getBalanceUndrawn(){

    }
    public getInterestAccrued(){

    }
    public getInterestOwed(){
        
    }

    
}