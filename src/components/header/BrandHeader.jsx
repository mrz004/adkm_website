import logo from "/logo.png";

function BrandImg() {
  return <img src={logo} alt="logo" className="w-36 aspect-square" />;
}

function BrandHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center px-4 py-8">
      <BrandImg />
      <div className="grid place-items-center gap-2 my-4 w-3/5">
        <div className="text-xs text-center">
          | दुरितांचे तिमिर जावो | विश्व स्वधर्म सूर्ये पाहो |
        </div>
        <div className="text-sm text-center">
          संत ज्ञानेश्वर शिक्षण संस्था,इस्लामपूर संचलित,{" "}
        </div>
        <div className="text-xl sm:text-2xl font-bold text-center text-primary-blue">
          प्राथमिक,माध्यमिक आश्रमशाळा व श्री.अण्णासाहेब डांगे कनिष्ठ महाविद्यालय
          आष्टा{" "}
        </div>
        <div className="text-sm text-center">ता.वाळवा, जि.सांगली - ४१६३०१ </div>
      </div>
      {/* <BrandImg /> */}
    </div>
  );
}

export default BrandHeader;
