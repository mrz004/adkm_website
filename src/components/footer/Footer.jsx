"use client";

import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router";

function Component() {
  return (
    <Footer>
      <div className="w-full">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Our Mission" />
            <div className="container text-white font-light text-justify">
              विद्यार्थ्यांना गुणवत्तापूर्ण शिक्षण प्रदान करून त्यांच्यात ज्ञान,
              कौशल्ये आणि नैतिक मूल्ये रुजवणे हे आमचे मुख्य उद्दिष्ट आहे. आधुनिक
              तंत्रज्ञान आणि समर्पित शिक्षण पद्धतींच्या माध्यमातून, आम्ही
              विद्यार्थ्यांना उज्ज्वल भविष्यासाठी सक्षम बनवतो.
            </div>
          </div>
          <div>
            <FooterTitle title="site map" />
            <FooterLinkGroup col>
              <FooterLink as={Link} to="/">
                Home
              </FooterLink>
              <FooterLink as={Link} to="/about">
                About Us
              </FooterLink>
              <FooterLink as={Link} to="/messages">
                Messages
              </FooterLink>
              <FooterLink as={Link} to="/gallery">
                Gallery
              </FooterLink>
              <FooterLink as={Link} to="/contact">
                Contact Us
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Quick Contacts" />
            <FooterLinkGroup col>
              <FooterLink href="tel:+91 8308206566">
                श्री. बोते आर. एल. - ८३०८२०६५६६{" "}
              </FooterLink>
              <FooterLink href="tel:+91 9022366575">
                श्री. बेंदरे व्ही. बी. - ९०२२३६६५७५{" "}
              </FooterLink>
              <FooterLink href="tel:+91 9423239412">
                डॉ. मेटकरी ए. एन्. - ९४२३२३९४१२{" "}
              </FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="location" />
            <FooterLinkGroup col>
              <FooterLink
                target="blank"
                href="https://maps.google.com/maps?ll=16.94246,74.417076&z=19&t=m&hl=en&gl=IN&mapclient=embed"
                className="my-2"
              >
                ता.वाळवा, जि.सांगली - ४१६३०१
              </FooterLink>
            </FooterLinkGroup>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d477.0814729375561!2d74.41707557148436!3d16.942460473696492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742962069126!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-0 rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 flex items-center justify-between">
          <FooterCopyright
            href="https://linkedin.com/u/zahoorahmedsayyad"
            by=""
            year={2025}
          />
          <div className="flex space-x-6 justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
