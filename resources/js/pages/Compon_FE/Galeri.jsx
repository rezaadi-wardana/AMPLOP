
const Galeri = () => {
  return (
                <div className="md:grid grid-col bg-gray-900 text-center py-20 md:px-8 max-w-[1280px] mx-auto bg-white gap-5 md:max-h-[800px] md:h-[100vh] w-[100%] ">
                    <div className="col-1 h-[100%] w-[100%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg md:mb-0 mb-5  ">
                            <div className="wrap-bg-gradient h-[100%] w-[100%] bg-[url(/img/box-1.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-l-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                                <div className="wrap-text w-[70%]">
                                    <h1 className="text-[1.5em] md:text-[2em] mb-2 font-black">Cek Jodoh Anda</h1>
                                    <p className="mb-5">Cek jodoh Anda dengan menggunakan layanan Cek Jodoh berdasarkan weton jawa, Hanya untuk pengetahuan bukan untuk dipercaya</p>
                                    <a href="/cekjodoh" className="bg-[#FFC107] text-gray-900 font-bold py-2 px-5 rounded-full">Coba Sekarang</a>
                                </div>
                            </div>
                    </div>
                    <div className="col-2 h-[100%] w-[100%] flex flex-col gap-5">
                        <div className="row-1 h-[50%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg ">
                            <div className="wrap-bg-gradient h-[100%]  bg-[url(/img/box-2.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-tr-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                                <div className="wrap-text w-[60%]">
                                    <h1 className="text-[1.5em] md:text-[2em] mb-2 font-semibold">Undangan Digital</h1>
                                    <p>Buat undangan digital yang menarik dan interaktif dengan mudah.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-2 h-[50%] w-[100%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg ">
                            <div className="wrap-bg-gradient h-[100%]  bg-[url(/img/box-3.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-br-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                                <div className="wrap-text w-[60%]">
                                    <h1 className="text-[1.5em] md:text-[2em] mb-2 font-semibold">Genggaman</h1>
                                    <p>Sebarakan undangan Anda dengan mudah dan cepat hanya dalam genggaman, lebih praktis dan hemat </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  )
}

export default Galeri

