import {Server as SocketIOServer, Socket} from "socket.io";

export class Sockets {
	private io: SocketIOServer;

	constructor(io: SocketIOServer) {
		this.io = io;
		this.socketEvents();
	}

	private socketEvents(): void {
		this.io.on("connection", (socket: Socket) => {
			socket.on("mensaje-to-server", (data: any) => {
				console.log(data);
				this.io.emit("mensaje-from-server", data);
			});
		});
	}
}
