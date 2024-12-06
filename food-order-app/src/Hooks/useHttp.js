import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config){
    const response = await fetch(url, config)
    const resData = await response.json()

    if(!response.ok){
        throw new Error(
            resData.message || 'something went wrong, failed to send request'
        )
    }
    return resData;
}

function useHttp(url, config, initialData){
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [responseData, setResponseData] = useState(initialData)

    function clearData(){
        setResponseData(initialData)
    }

    const sendRequest = useCallback(async function sendRequest(data){
        setIsLoading(true)
        try{
            const resData = await sendHttpRequest(url, { ...config, body: data})
            setResponseData(resData)
        }catch(error){
            setError(error.message || 'Something went wrong')
        }
        setIsLoading(false)
    },[url, config])

    useEffect(()=>{
        if(config && (config.method === 'GET' || !config.method) || !config){
            sendRequest()
        }
    },[sendRequest, config])

    return{
        responseData,
        isLoading,
        error,
        sendRequest,
        clearData,
    }
}
export default useHttp