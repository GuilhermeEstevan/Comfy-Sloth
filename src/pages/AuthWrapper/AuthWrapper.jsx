import { useAuth0 } from "@auth0/auth0-react"
import { Wrapper } from "./index"



const AuthWrapper = ({ children }) => {

    const { isLoading, error } = useAuth0()

    if (isLoading) {
        return (
            <Wrapper>Loading...</Wrapper>
        )
    }
    if (error) {
        return (
            <Wrapper>{error.message}</Wrapper>
        )
    }
    return (
        <>{children}</>
    )
}
export default AuthWrapper