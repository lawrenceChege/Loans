import * as mongoose from 'mongoose';
import { isDate } from 'util';

const Schema = mongoose.Schema;

export const LoanSchema = new Schema({
    loanName :{
        type: String,
        required: 'Enter name of the loan'
    },
    lenderName :{
        type: String,
        required: 'Enter name of the lender'
    },
    facilityAmount:{
        type: Number,
        required: 'Enter facility amount'
    },
    charge:{
        type: Number,
        required: 'Enter loan type'
    },
    GDV:{
        type: Number
    },
    interest:{
        type: Number,
        required: 'Enter interest percentage'
    },
    interestCompounded:{
        type: Boolean
    },
    compoundPeriod:{
        type: String
    },
    interestServiced:{
        type: Boolean
    },
    lendingFee: {
        type: Number,
        required: 'Enter lending fee percentage'
    },
    lendingFeeAddedToFacility:{
        type: Boolean
    },
    lendingFeeLoanType:{
        type: Number,
        required: 'Enter lending fee loan type'
    },
    otherFeesOnLending:{
        type: Number
    },
    otherFeesAddedToFacility:{
        type: Boolean
    },
    OtherFeesLoanType:{
        type: Number,
        required: 'Enter other fees loan type'
    },
    nonUtilizationRate: {
        type: Number,
        required: 'Enter non-utilization rate percentage'
    },
    nonUtilizationRateCompound:{
        type: Boolean
    },
    nonUtilizationRateCompoundPeriod:{
        type: String
    },
    exitFees:{
        type: Number,
        required: 'Enter exit fees percentage'
    },
    exitFeesCalculation:{
        type: Number
    },
    defaultRate:{
        type: Number,
        required: 'Enter default rate percentage'
    },
    defaultCompounded:{
        type: Boolean
    },
    capitalizeLoanOnDefault:{
        type: Boolean
    },
    defaultAtEndOfTerm:{
        type: Boolean
    },
    secondLoanPartInterest:{
        type: Number,
        required: 'Enter second loan part interest rate'
    },
    secondLoanPartInterestCompounded:{
        type: Boolean
    },
    secondLoanPartInterestCompoundPeriod:{
        type:Boolean
    },
    secondLoanServiced:{
        type: Boolean
    },
    minimumInterestAmmount:{
        type: Number,
        required: 'Enter minimum interest Amount'
    },
    startDate:{
        type: Date
    },
    repaymentDate:{
        type: Date
    },
    interestCalculationDate:{
        type: Date
    }
    
});
export const DrawdownScheduleSchema = new Schema({
    drawdown: {
        drawdownDate:{
            type: Date
        },
        drawdownAmount:{
            type: Number
        }
    }

});
export const systemAddedDataSchema = new Schema({
    dailyRateFirstLoan:{
        type: Number
    },
    dailyRateSecondLoan :{
        type: Number
    },
    dailyRateNonUtilization:{
        type: Number
    },
    dailyDefaultRate:{
        type: Number
    }
});

