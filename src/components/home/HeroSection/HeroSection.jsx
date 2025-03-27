import buildibg_img from "/main_building.png";
const HeroSection = () => {
  return (
    <>
      <div>
        <img
          src={buildibg_img}
          alt="Main Building"
          className="w-full max-h-[50vh] object-cover"
        />
      </div>

      <div className="container flex flex-col justify-items-center items-center gap-8 mx-auto py-12 px-4 max-w-11/12 sm:max-w-9/12">
        <div className="text-center">
          <p className="mb-4">
            संत ज्ञानेश्वर शिक्षण संस्था इस्तामपूर ही संस्था मा. अण्णासाहेब
            डांगे यांनी १९८६ साली सुरु केली.
          </p>
          <blockquote className="text-2xl font-serif italic text-primary-blue mb-4">
            " दुरितांचे तिमिर जावो । विश्व स्वधर्म सुर्वे पाहो ।। जो जे वांछिल
            तो ते लाहो। प्राणिजात ।। "
          </blockquote>
          <p>
            हे ब्रिद वाक्य घेऊन सन १९९२ पासून संस्थेने आष्टा येथे प्राथमिक
            स्वरुपात पहिली आश्रमशाळा सुरु केली, श्रेणीवाढीने १९९९ साली माध्यमिक
            आश्रमशाळा इयत्ता ५ वी ते १० वी सुरु झाली. त्याचबरोबर सन २००८ पासून
            मा. श्री. अण्णासाहेब डांगे कनिष्ठ महाविद्यालय (कला व विज्ञान) सुरु
            झालेले आहे.
          </p>
          <p>
            मा. अण्णासाहेब डांगे (आप्पा) याच्या मार्गदर्शनाखाली मागील वर्षापासून
            सहशालेय उपक्रम व गुणवत्ता विकास वाढ उपक्रम चालविलेले आहेत. याचेच
            फलित म्हणजे प्राथमिक, माध्यमिक, आश्रमशाळा व अण्णासाहेब डांगे कनिष्ठ
            महाविद्यालय ISO-9001-2015 मानांकन प्राप्त झालेले आहे.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
