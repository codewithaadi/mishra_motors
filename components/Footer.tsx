import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Information',
    links: [
      { title: 'Disclaimer', url: '/' },
      { title: 'Refund and Cancellation Policy', url: '/' },
      { title: 'About us', url: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Events', url: '/' },
      { title: 'Blog', url: '/' },
      { title: 'Podcast', url: '/' },
      { title: 'Invite a friend', url: '/' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { title: 'Discord', url: 'https://discord.com/' },
      { title: 'Instagram', url: 'https://www.instagram.com/' },
      { title: 'Twitter', url: 'https://twitter.com/' },
      { title: 'Facebook', url: 'https://www.facebook.com/' },
    ],
  },
];

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src="/truevalue.png" alt="logo" width={118} height={18} className="object-contain" />
        <p className="text-base text-gray-700">
          TrueValue 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2023 TrueValue. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
