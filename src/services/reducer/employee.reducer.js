import { CREATEEMP, SEMP } from "../const"


let getData = JSON.parse(localStorage.getItem('employees'))

let data = [];
if(getData != null){
    data = getData;
}

const initialState ={
    employees:[],
    employee:null
}

export const employeeReducer = (state=initialState,action) =>{
    switch(action.type){
        case CREATEEMP:
            localStorage.setItem("employees",JSON.stringify([...state.employees,action.payload]));
            return{
                ...state,
                employees: [...state.employees,action.payload]
            }
        // case SEMP :
        //     const single = DataTransfer.filter = (d) =>{
        //         return d.id == action.payload;
        //     } 
        //     return {
        //         ...state,
        //         employee:single
        //     }

        default :
            return state;    
    }
}