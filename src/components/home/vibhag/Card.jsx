import { Button, Card } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router";

function Component({ title, imgsrc, description, link }) {
  return (
    <Card className="max-w-sm h-full" imgAlt={title} imgSrc={imgsrc}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button as={Link} to={link} className="mt-auto">
        अधिक माहिती
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Card>
  );
}

export default Component;
