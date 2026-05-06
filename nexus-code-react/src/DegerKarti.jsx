function DegerKarti(props) {
  return (
    <div className="bg-[#121416] p-8 rounded-2xl border border-gray-800 hover:border-[#bfb7a9] transition-colors flex flex-col items-center text-center">
      <h3 className="text-[#edecec] text-2xl font-bold mb-4 font-[monaco]">
        {props.baslik}
      </h3>
      <p className="text-gray-400 leading-relaxed">{props.aciklama}</p>
    </div>
  );
}

export default DegerKarti;
