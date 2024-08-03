import CardContainer from "@/components/CardContainer";
import Next from "@/components/Next";

interface postType {
  options: [
    { img: string; text: string; _id: string; points: [string] },
    { img: string; text: string; _id: string; points: [string] }
  ];
}

const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  try {
    const data: postType = await fetch(
      `http://localhost:3000/api/get/${params.id}`,
      {
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      }
    ).then((res) => {
      return res.json();
    });
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
  } catch {
    return <h1>kuch bhi ye nahi chalega</h1>;
  }
};

export default Page;

export const fetchCache = "force-no-store";
