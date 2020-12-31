export const host="https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"

export const getRequestOption=()=>{
    return{
        method:'GET',
        redirect:'follow',
    }
}

export const getReqCorsOption=()=>{
    return{
        method:'GET',
        redirect:'follow',
        // mode:'no-cors',
        // credentials:'include'
        // Accept:'*/*',
        // "Accept-Encoding":"gzip, deflate, br"
    }
}