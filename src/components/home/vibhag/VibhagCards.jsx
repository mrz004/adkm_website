import img_hs from "/vibhag/high.webp";
import img_ss from "/vibhag/secondary.jpg";
import img_ps from "/vibhag/primary.webp";
import Card from "./Card";

function VibhagCards() {
  const cards = [
    {
      title: "प्राथमिक विभाग",
      image: img_ps,
      description: "इ.१ ली ते ४ थी",
      link: "/sections/primary",
    },
    {
      title: "माध्यमिक विभाग",
      image: img_ss,
      description: "इ.५ वी ते १० वी ",
      link: "/sections/secondary",
    },
    {
      title: "उच्छ प्राथमिक विभाग",
      image: img_hs,
      description: "इ.११ वी ते १२ वी (कला व विज्ञान)",
      link: "/sections/higher-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 place-items-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imgsrc={card.image}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default VibhagCards;
