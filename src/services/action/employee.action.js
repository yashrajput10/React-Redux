import { CREATEEMP, SEMP } from "../const"

export const createEmp =(data)=>{
    return{
        type: CREATEEMP,
        payload:data
    }
}

export const singleEmp = (id)=>{
    return {
        type : SEMP,
        payload: id
    }
}