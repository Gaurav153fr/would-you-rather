import CardContainer from "@/components/CardContainer";
import Next from "@/components/Next";

interface postType {
  options: [
    { img: string; text: string; _id: string; points: [string] },
    { img: string; text: string; _id: string; points: [string] }
  ];
}

const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL|| "http://localhost:3000"; 
    const data: postType = await fetch(`${apiUrl}/api/get/${params.id}`, {
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    }).then((res) => {
      return res.json();
    });
    console.log(data);

    return (
      <main className="flex min-h-screen flex-col items-center  overflow-hidden">
        {/* <Navbar /> */}
        <h2 className=" text-3xl font-bold text-nowrap shadow-lg bg-white my-2 px-1">
          Would you rather?
        </h2>
        <Next isHome={false} />
        <CardContainer post={data} id={params.id} />
      </main>
    );
  } catch (err) {
    console.log(err);

    return <h1>kuch bhi ye nahi chalega</h1>;
  }
};

export default Page;

export const fetchCache = "force-no-store";
