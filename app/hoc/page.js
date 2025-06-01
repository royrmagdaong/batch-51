'use client'

// import withConsoleLog from "../component/with-console.log";
import withDataFetching from "../component/with-data-fetching";

const url = 'https://icanhazdadjoke.com/slack'

const HOC = (props) => {
    console.log('data', props.data)
    const data = props.data?.attachments[0]?.text
    
    return ( 
        <div>
            {data}
        </div>
     );
}
 
export default withDataFetching(HOC, url);