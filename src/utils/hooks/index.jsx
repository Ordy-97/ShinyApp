import { useState, useEffect } from 'react'

 

export function useFetch(url) {

    const [data, setData] = useState({})
    const [error, setError] = useState(true)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        if (!url) return

        async function fetchData() {
            try{
                const response = await fetch(url)

                const data = await response.json()

                setData(data)
            }catch(err) {
                // eslint-disable-next-line no-console
                console.log(err)

                setError(true)
                
            } finally {
                
                setLoading(false)
                
            }

        }

        setLoading(true)

        fetchData()

    }, [url])

    

    return { isLoading, data, error }

}