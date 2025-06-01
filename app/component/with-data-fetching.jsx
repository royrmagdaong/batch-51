import axios from 'axios'
import { useState, useEffect } from 'react'

const withDataFetching = (WrapperComponent, url) => {
    return (props) => {
        // const [data, setData] = useState({attachments: ['']})
        const [data, setData] = useState()

        useEffect(()=>{
            const fetchData = () => {
                axios.get(url)
                .then(async (response) => {
                    // handle success
                    setData(response.data)
                    // console.log('fetched data', response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            }

            fetchData()
        }, [])

        return <WrapperComponent {...props} data={data}/>;
    }
}
 
export default withDataFetching;