import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContextProvider";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();
	useEffect(() => {
	
		if (authUser) {
			const socket = io("https://localhost:", {
				query: {
					userId: authUser._id,
				},
			});
			console.log(socket)
			setSocket(socket);
			socket.on("connect_error", (err) => {
				// the reason of the error, for example "xhr poll error"
				console.log(err.message);
			  
				// some additional description, for example the status code of the initial HTTP response
				console.log(err.description);
			  
				// some additional context, for example the XMLHttpRequest object
				console.log(err.context);
			  });
			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};