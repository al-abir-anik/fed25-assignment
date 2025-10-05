export async function GET() {
  const orders = [
    { id: "001", customer: "John Doe", amount: 250, status: "Completed" },
    { id: "002", customer: "Jane Smith", amount: 180, status: "Pending" },
    { id: "003", customer: "Alex Carter", amount: 320, status: "Cancelled" },
    { id: "004", customer: "Lisa Ray", amount: 500, status: "Completed" },
  ];

  return Response.json(orders);
}
