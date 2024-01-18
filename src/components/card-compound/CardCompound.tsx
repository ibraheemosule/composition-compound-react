type TCardCompound = {
  [key in 'heading' | 'body' | 'footer']?: JSX.Element;
};

const CardCompound = ({ heading, body, footer }: TCardCompound) => (
  <div className="w-[300px] mx-auto py-8 px-6 bg-gray-200 mt-32 rounded-lg">
    {heading}
    {body}
    {footer}
  </div>
);

CardCompound.Heading = Heading;
CardCompound.Body = Body;
CardCompound.Footer = Footer;

//HEADING COMPONENT LOGIC
function Heading({ name }: { name: string }) {
  return (
    <>
      <h2 className="font-bold text-lg">Hi {name},</h2>
      <p className="mt-2">
        Korapay can help you with <b>settlements</b>
      </p>
    </>
  );
}

//BODY COMPONENT LOGIC
const services = [
  'Bulk Payments',
  'Settlements',
  'Cross-border Transactions',
  'Accepting payments',
  'Card issuance',
  'FVBA',
  'and more',
];

function Body() {
  return (
    <div className="flex flex-wrap gap-3 border-t border-gray py-2 mt-2">
      {services.map((service, i) => (
        <span
          key={i}
          className="rounded-lg cursor-pointer p-1 px-2 bg-blue-200"
        >
          {service}
        </span>
      ))}
    </div>
  );
}

//FOOTER COMPONENT LOGIC
function Footer({ name }: { name: string }) {
  return (
    <footer className="w-full py-2 mt-2">
      <p>{name}, why dont you create an account with us?</p>

      <a
        className="inline-block mt-4 rounded-lg py-2 px-4 bg-blue-400 text-white"
        target="_blank"
        href="https://korahq.com"
      >
        Create Account
      </a>
    </footer>
  );
}

export default CardCompound;
