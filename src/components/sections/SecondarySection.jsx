import Section from "./Section";

const data = {
  title: "माध्यमिक विभाग",
  head: "मुख्याध्यापक",
  principal: {
    name: "श्री.रघुनाथ लक्ष्मण बोते",
    contact: "८३०८२०६५६६",
  },
  academicYear: "२०२४-२०२५",
  studentDataTable: {
    headers: [
      "वर्ग",
      "निवासी विद्यार्थी",
      "अनिवासी विद्यार्थी",
      "एकूण विद्यार्थी",
    ],
    data: ["इ.५ वी ते १० वी", "१७०", "२१४", "३८४"],
  },
  teacherDataTable: {
    headers: ["शिक्षक संख्या", "शिक्षकेत्तर कर्मचारी संख्या", "एकूण"],
    data: ["१२", "१०", "२२"],
  },
};

function SecondarySection() {
  return <Section data={data} />;
}

export default SecondarySection;
