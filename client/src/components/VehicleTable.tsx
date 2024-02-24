import { Vehicle } from "@/lib/types";

type Props = {
  vehicles: Vehicle[];
};

export function VehicleTable({ vehicles }: Props) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th scope="col">&#35;</th>
          <th scope="col">Year</th>
          <th scope="col">Make</th>
          <th scope="col">Plate &#35;</th>
          <th scope="col">ST</th>
          <th scope="col">Vehicle ID</th>
          <th scope="col">Lienholder</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((n, i) => (
          <tr key={n.vehicleId}>
            <td>{i + 1}</td>
            <td>{n.year}</td>
            <td>{n.make}</td>
            <td>{n.plateNumber}</td>
            <td className="uppercase">{n.state}</td>
            <td>{n.vehicleId}</td>
            <td>{n.lienholder || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
