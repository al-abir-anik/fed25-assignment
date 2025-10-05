export async function GET() {
  const stats = {
    totalOrders: 124,
    revenue: 8450,
    customers: 68,
  };

  return Response.json(stats);
}
