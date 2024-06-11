import React, { memo, useEffect, useMemo, useState } from "react";
import io, { Socket } from "socket.io-client";

const connectSocketServer = () => {
    const socket = io('http://localhost:8080', {
        transports: ['websocket']
    });
    return socket;
};

interface Props {
    socket: Socket;
    socketData: [];
    online: boolean;
}

const Hoc_Socket = (WrappedComponent: any) => {
    const Hoc_SocketWrapper = (props: any) => {
        const socket = useMemo(() => connectSocketServer(), []);
        const [online, setOnline] = useState(socket.connected);
        const [socketData, setSocketData] = useState([]);

        useEffect(() => {
            socket.on('connect', () => {
                setOnline(true);
            });

            socket.on('disconnect', () => {
                setOnline(false);
            });

            socket.on('current-data', (data) => {
                setSocketData(data);
            });

            return () => {
                socket.off('connect');
                socket.off('disconnect');
                socket.off('current-data');
            };
        }, [socket]);

        return (
            <WrappedComponent
                {...props}
                socket={socket}
                socketData={socketData}
                online={online}
            />
        );
    };

    return memo(Hoc_SocketWrapper);
};

export default Hoc_Socket;
