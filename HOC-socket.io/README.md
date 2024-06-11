# DESCRIPCION

## HOC de React para establecer comunicaion con el backend por sockets

1. Clonar el repositorio
2. Instalar las dependencias `npm install`
3. Mover para ruta de preferencia en el proyecto

## Uso

Envolver el compoente en donde se desea utilizar el HOC y con la exportacion por defecto. Ej:

```
export default Hoc_Socket(MiComponente)
```

El Tipado por defecto que tienen las props del componente en donde se utiliza es:

```
import {Socket} from "socket.io-client";

export interface MiComponenteProps {
	socket: Socket;
	tickets: [];
	online: boolean;
}
```
