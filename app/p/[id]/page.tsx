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
      <main className="flex min-h-screen flex-col items-center scrolling-image overflow-hidden">
        {/* <Navbar /> */}
        <h2 className="text-5xl my-3 font-extrabold font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] stroke-text stroke-2 max-md:m-auto max-md:text-xl ">
          Would you rather?
        </h2>
        <Next />
        <CardContainer post={data} id={params.id} />
      </main>
    );
  } catch {
    return <h1>hello</h1>;
  }
};

export default Page;

export const fetchCache = "force-no-store";
