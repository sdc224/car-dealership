import { getConnectionOptions, createConnection, Connection, ConnectionOptions } from "typeorm";
import { User } from "../entity/User";
import { Person } from "../entity/Person";
import { Car } from "../entity/Car";

export const createTypeOrmConnection = async (): Promise<Connection> => {
	const connectionOptions: ConnectionOptions = await getConnectionOptions(process.env.NODE_ENV);
	return process.env.NODE_ENV === "production"
		? createConnection({
				...connectionOptions,
				url: process.env.DATABASE_URL,
				entities: [User, Person, Car],
				name: "default"
		  } as any)
		: createConnection({ ...connectionOptions, name: "default" });
};
