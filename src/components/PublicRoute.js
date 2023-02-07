import { Route, useHistory } from 'react-router-dom'

const PublicRoute = ({ children, ...rest }) => {
    const credentials = localStorage.getItem('credentials')
    const history = useHistory()
    return (

        <Route {...rest}>
            {
                credentials ? history.push('/') : children
            }
        </Route>


    )

}
export default PublicRoute