export default function FaqAccordion() {
return (
<>
<h1 className="text-xl font-bold pb-4">Frequently Asked Questions</h1>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="blockchain" />
  <div className="collapse-title font-semibold">What is a Blockchain?</div>
  <div className="collapse-content text-sm py-2 px-2">A blockchain is a distributed ledger (like a ledger in accounting - i.e a record of opening
and closing balance and timestamps). It provides an immutable record (meaning any
data record cannot be changed or altered) of any data entered on the blockchain</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="crypto" />
  <div className="collapse-title font-semibold">Is Blockchain cryptocurrency?</div>
  <div className="collapse-content text-sm py-2 px-2">While crypto uses blockchains to power their technology, Blockchains do not need to
use crypto at all and have use cases far beyond just cryptocurrency.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="types" />
  <div className="collapse-title font-semibold">What are the different types of Blockchains?</div>
  <div className="collapse-content text-sm py-2 px-2">You get two types - Permissionless Blockchains (public blockchains anyone can use,
usually for crypto use) and Permissioned Blockchains (private blockchains for use by
businesses and organizations that only approved members can use). </div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="business" />
  <div className="collapse-title font-semibold">Why should businesses or organizations use Blockchains?</div>
  <div className="collapse-content text-sm py-2 px-2">Blockchains provide a secure, digital record of all data that a business or organization
might use for their administration, operations, finances, etc. It reduces costs and
paperwork and streamline operations. Furthermore, it also offers enhanced protection
against fraud, and enhanced transparency, security and accountability.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="industries" />
  <div className="collapse-title font-semibold">What sort of industries can use Blockchains?</div>
<div className="collapse-content text-sm py-2 px-2">Blockchains can be used for a diverse range of industries.
Logistics companies can use Blockchains to ensure payment is made, the product is
picked up, optimize the best route, and that the product is delivered thereby reducing
administration burden.
Retail outlets can ensure that stock is accounted for, paid for, and check their sales to
verify their expenses to profit ratio from revenue much quicker than they would
manually or using legacy technology.
Industries can secure their intellectual property and copyrights, while proving
authenticity by providing traceable data from extraction to end users to customers.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="skills" />
  <div className="collapse-title font-semibold">Don't Blockchains require strong computer skills?</div>
<div className="collapse-content text-sm py-2 px-2">For business use - not at all. At least not with GondwanaChain.
Developing your own Blockchain requires significant costs, skill, time and infrastructure.
Using Blockchain-as-a-Service (BaaS) reduces this burden.
We set up your node for you, we install everything that's needed, and we link it to our
node.
Instead of doing complex operations on the Blockchain with commands, we have a
simple user-friendly interface that can be used on computers, laptops or even your web
browser.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="onboarding" />
  <div className="collapse-title font-semibold">How does onboaring work?</div>
<div className="collapse-content text-sm py-2 px-2">Onboarding is very simple.
You can register on our website or the app.
All you need to do is to fill in the form, verify your account, and select which plan you
want to use. The moment the payment is reflected in our account, we will set up your
node, permissions, and anything else you need based on which plan you selected.
You should receive your login credentials the same day and you're ready to get started.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="upgrade" />
  <div className="collapse-title font-semibold">Can I upgrade my account?</div>
<div className="collapse-content text-sm py-2 px-2">Yes! Upgrading your account is simple.
Just select the package you want, pay the fee, and we will upgrade your account the
same day. Your credentials will still be the same, just you'll be on the new billing and if
you select a more powerful package, your node upgraded.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="training" />
  <div className="collapse-title font-semibold">What about support and training?</div>
<div className="collapse-content text-sm py-2 px-2">In addition to our free tutorials and our wiki-based knowledge base on our site which
you will gain access to once you’ve registered and signed up for a package, we do offer
workshops, training and bootcamps for a fee to those wanting to learn more in depth on
how to use GondwanaChain and our application GondwanaChain Connect.
We support doing training and bootcamps both in person and online consultation.
Our support system works on a ticket-based system with those on higher plans and/or
annual plans getting priority support with the package they selected.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="custom" />
  <div className="collapse-title font-semibold">What if I need something more customized?</div>
<div className="collapse-content text-sm py-2 px-2">If you require a custom plan, we recommend getting in contact with us for a quotation.
We do custom Smart Contract development and a rate between $2500-$8000 for
simple Smart Contracts to $25000+ for highly complex Smart Contracts.
For more information, please contact technical@coinafriq.org or info@coinafriq.org and
we’ll be happy to tell you more about GondwanaChain.</div>
</div>
</>
);
}
