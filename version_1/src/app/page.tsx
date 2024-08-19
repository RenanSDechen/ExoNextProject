
export default function Home() {
  return (
    <main className="grid  grid-cols-2 place-content-start w-screen ">
      <div className="w-1/3 h-full">Menu</div>
      <div className="bg-slate-500 grid grid-cols-3 gap-4 h-2/3 w-2/3">
         <div className="py-4 w-auto">01</div>
         <div className="py-12 w-auto">02</div>
         <div className="py-8  w-auto">03</div>
      </div>
    </main>
  );
}
