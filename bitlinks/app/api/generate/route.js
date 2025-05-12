import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const existingUrl = await collection.findOne({ shortUrl: body.shortUrl });
  if (existingUrl) {
    return Response.json({
      status: "error",
      error: true,
      message: "Url already exists",
    });
  }

  const result = await collection.insertOne({
    shortUrl: body.shortUrl,
    url: body.url,
  });

  return Response.json({
    status: "success",
    error: false,
    message: "Url generated successfully",
    body,
  });
}
