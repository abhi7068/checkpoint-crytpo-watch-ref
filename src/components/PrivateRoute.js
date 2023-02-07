import { Route, useHistory } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const credentials = localStorage.getItem('credentials')
    console.log(credentials)
    const history = useHistory()
    return (

        <Route {...rest}>
            {
                credentials ? children : history.push('/login')

            }
        </Route>


    )
    
}
 export default PrivateRoute