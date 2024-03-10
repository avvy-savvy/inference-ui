import {useEffect, useState} from "react";

const initialArrivalInfo = {
    'aspect': "a", 'elevation': "b", "date": "c", 'prob': ""
}

export default function Page() {
    const [data, setData] = useState({
        'aspect': "a", 'elevation': "b", "date": "c", 'prob': ""
    })

    // useEffect(() => {
    //     const location = `${window.location.hostname}:5000`;
    //     const settings = {
    //         // source: "*",
    //         // method: 'GET',
    //         // headers: {
    //         //     // 'Accept': 'application/json',
    //         //     // 'Content-Type': 'application/json',
    //         //     // 'Access-Control-Allow-Origin': location,
    //         //     'Access-Control-Allow-Origin': '*',
    //         //     "Access-Control-Allow-Methods": "GET, PUT, POST",
    //         //     "Access-Control-Allow-Headers": "Content-Type"
    //         // }
    //     };
    //     const fetchData = async () => {
    //         const response = await fetch(`http://${location}/treeline_labels`, settings)
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`)
    //         }
    //         const result = await response.json()
    //         console.log(result)
    //         setData(result)
    //     }
    //
    //     fetchData().catch((e) => {
    //         // handle the error as needed
    //         console.error('An error occurred while fetching the data: ', e)
    //     })
    // }, [])

    async function onSubmit() {
        event.preventDefault()

        const location = `${window.location.hostname}:5000`;
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "aspect": "GET, PUT, POST",
                "elevation": "Content-Type",
                "date": ""
            })
        };
        const response = await fetch(`http://${location}/query_arrival_info`, settings)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        setData({
            ...data, 'prob': result['prob']
        })
    }

    return (<form onSubmit={onSubmit}>
        <input type="text" name="aspect" defaultValue={data['aspect']}/>
        <input type="text" name="elevation" defaultValue={data['elevation']}/>
        <input type="text" name="date" defaultValue={data['date']}/>

        <input type="text" name="date" defaultValue={data['prob']}/>
        <button type="submit">Submit</button>
    </form>)
}