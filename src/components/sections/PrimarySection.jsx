import Section from "./Section";

const data = {
  title: "प्राथमिक विभाग",
  head: "मुख्याध्यापक",
  principal: {
    name: "श्री.सुनिल नामदेव शिणगारे",
    contact: "९०२२३६६५७५",
  },
  academicYear: "२०२४-२०२५",
  studentDataTable: {
    headers: [
      "वर्ग",
      "निवासी विद्यार्थी",
      "अनिवासी विद्यार्थी",
      "एकूण विद्यार्थी",
    ],
    data: ["इ.१ ली ते ४ थी", "७०", "१०७", "१७७"],
  },
  teacherDataTable: {
    headers: ["शिक्षक संख्या", "शिक्षकेत्तर कर्मचारी संख्या", "एकूण"],
    data: ["७", "४", "११"],
  },
};

function PrimarySection() {
  return <Section data={data} />;
}

export default PrimarySection;
