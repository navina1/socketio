import { useContext, useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser}=useAuthContext()

    const login = async (userName, password) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName: userName, password })
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("userInfo", JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };
    return { login, loading };
}
export default useLogin