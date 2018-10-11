import * as mongoose from 'mongoose';
import { LoanSchema, DrawdownScheduleSchema, SystemAddedDataSchema, LoanScheduleSchema } from "../models/crmModel";
import { Request, Response } from "express";

const LoanSchedule = mongoose.model('loanSchedule', LoanScheduleSchema);
const DrawdownSchedule = mongoose.model('drawdown', DrawdownScheduleSchema);
const SystemAddedData = mongoose.model('systemAddedData', SystemAddedDataSchema);
const Loan = mongoose.model('loan', LoanSchema)

export class loanScheduleGenerator {
    public createLoanScheduleTable(){
        let loan :Object = Loan.findOne();
        let startDate : Date = loan.startDate;
        let endDate : Date = loan.repaymentDate;
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
    public getSpecificLoanData(loanID: String){ 
        let loan: Object = Loan.findOne();
        return loan
    }
    public getDrawdownDrawAmount(params:any) {
        let drawdownDrawAmount = mongoose.model('drawdownDrawnScheduleSchema').find()
        return drawdownDrawAmount
    }
    public getLendingFeesChargeAmount(){
        let lendingFeesChargeAmount = (loan.facilityAmount * (loan.LendingFee/100));
        return lendingFeesChargeAmount
        
    }
    public getLendingFeesServicingChargeAmount(){
        if (loan.lendingFeeAddedToFacility==false){
            let lendingFeesServicing = -loan.lendingFeesChargeAmount;
            return lendingFeesServicing
        }

    }
    public getOtherFeesChargeAmount(){
        let OtherFeesChargingAmount = loan. otherFeesOnLending
        return OtherFeesChargingAmount

    }
    public getOtherFeesServicingChargeAmount(){
        let OtherFeesServicingCharge = 
        return OtherFeesServicingCharge

    }
    public getFirstInterestAmount(){
        let FirstInterestAmount = 
        return FirstInterestAmount

    }
    public getFirstInterestServicingAmount(){
        let FirstInterestServicingAmount 
        return FirstInterestServicingAmount

    }
    public getSecondInterestAmount(){
        let SecondInterestedAmount 
        return SecondInterestedAmount

    }
    public getSecondInterestServicingAmount(){
        let SecondInterestedServicingAmount

        return SecondInterestedServicingAmount

    }
    public getFirstLoanBalance(){
        let FirstLoanBalance =
        return FirstLoanBalance

    }
    public getSecondLoanBalance(){
        let SecondLoanBalance =
        return SecondLoanBalance;

    }
    public getBalanceDrawn(){
        let BalanceDrawn = 
        return BalanceDrawn

    }
    public getBalanceUndrawn(){
        let BalanceUndrawn = 
        return BalanceUndrawn

    }
    public getInterestAccrued(){
        let InterestAccrued =
        return InterestAccrued

    }
    public getInterestOwed(){
        let InterestOwed =
        return InterestOwed;

    }

    
}