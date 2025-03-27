import Section from "./Section";

const data = {
  title: "उच्च माध्यमिक विभाग",
  head: "विभाग प्रमुख",
  principal: {
    name: "डॉ.आनंदराव निवृत्ती मेटकरी",
    contact: "९४२३२३९४१२",
  },
  academicYear: "२०२४-२०२५",
  studentDataTable: {
    headers: [
      "वर्ग",
      "निवासी विद्यार्थी",
      "अनिवासी विद्यार्थी",
      "एकूण विद्यार्थी",
    ],
    data: ["इ.११ वी ते १२ वी (कला व विज्ञान)", "८०", "१४०", "२२०"],
  },
  teacherDataTable: {
    headers: ["शिक्षक संख्या", "शिक्षकेत्तर कर्मचारी संख्या", "एकूण"],
    data: ["८", "५", "१३"],
  },
};

function HigherSecondarySection() {
  return <Section data={data} />;
}

export default HigherSecondarySection;
