
const withConsoleLog = (WrapperComponent) => {
    return (props) => {
        console.log('Higher Order Components')
        return <WrapperComponent {...props} />;
    }
}
 
export default withConsoleLog;