import Addition from "@/components/Addition";

export default function Home() {
  return (
    <div className="">
      <div className="text-xl font-bold text-center">
        Addition
      </div>
      <div className="text-center border border-current mx-auto my-5 w-36">
        <Addition />
      </div>
    </div>
  );
}
