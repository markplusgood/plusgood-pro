How it works
The user passes the contact link as an email, tel, sms, facetime, or href prop. The component obfuscates href data until a hover, click, or focus event. Links are given their proper URL schemes (mailto, facetime, etc.) The link is rendered in reverse in the dom, but reversed again with css. This making the link useless for spammers, but user friendly on screen.

Why
The world needs obfuscated links that display the link in a friendly way.

Installation
npm install --save react-obfuscate
Input
import React from 'react';
import Obfuscate from 'react-obfuscate';

export default () => (
  <p>
    Phone: <Obfuscate tel="205-454-1234" />
    <br />
    Email:{' '}
    <Obfuscate
      email="hello@coston.io"
      headers={{
        cc: 'dade@zero-cool.af',
        bcc: 'smith@machina.net',
        subject: 'react-obfuscate',
        body: 'Down with the machines!',
      }}
    />
  </p>
);
Output
Robot Interaction
<p>
  Phone:
  <a href="obfuscated" style="direction: rtl; unicode-bidi: bidi-override;"
    >4321-454-502</a
  ><br />
  Email:
  <a href="obfuscated" style="direction: rtl; unicode-bidi: bidi-override;"
    >oi.notsoc@olleh</a
  >
</p>
Human Interaction
<p>
  Phone: <a href="tel:205-454-1234">205-454-1234</a><br>
  Email: <a href="mailto:hello@coston.io?cc=kate%40acidburn.af&amp;bcc=tanderson%40metacortex.net&amp;subject=react-obfuscate&amp;body=Down%20with%20the%20machines!">hello@coston.io</a>
</p>
Common Options
Prop	Type	Default	Description
email	string	null	email address of the intended recipient
headers	object	null	subject, cc, bcc, body, etc
tel	string	null	telephone number of the intended recipient
sms	string	null	sms number of the intended recipient
facetime	string	null	facetime address of the intended recipient
href	string	null	Obfuscate any other URL type (e.g. WhatsApp)
Uncommon Options
Prop	Type	Default	Description
linkText	string	'obfuscated'	add custom pre-interaction href attribute placeholder text
obfuscate	boolean	true	set to false to disable obfuscation
obfuscateChildren	boolean	true	set to false to disable obfuscation of children
element	string	'a'	use if you want to override the default a tag
onClick	function	null	called prior to setting location (e.g. for analytics tracking)
Development
npm start
Consecutive Obfuscate/inline elements
react-obfuscate is an inline element. Using consecutive inline elements inside a block element causes an issue with the bidi-override reversal on Chrome. To prevent this, add any text between the elements, wrap <Obfuscate/> with another element (like <span>), or add style={{display:'inline-block'}} to prevent any issues.

Example Case:

<address>
  <Obfuscate style={{ display: 'inline-block' }} email="-mail@mailbox.org" />
  <br />
  <Obfuscate style={{ display: 'inline-block' }} tel="+69 111 222 333" />
</address>
Obfuscating custom elements with the element prop
With the element prop, users can obfuscate any element, like paragraphs or headers. Changing the dom element also removes the href and onClick props. Custom styling is required due to handling of right-to-left direction styles. Usually, adding style={{textAlign:'left'}} will suffice.

Example Case:

<Obfuscate element="p" style={{ textAlign: 'left' }}>
  This paragraph is more secret than others.
</Obfuscate>
Children
By default, objects are not reversed in the dom, but other types are. The obfuscateChildren prop set will disabled this functionality when set to false. If the child is an object, like html elements are, it will be rendered normally.

Example Use Case
<Obfuscate email="hello@coston.io" aria-label="Email Me">
  <svg width={24} height={21}>
    <path
      fill="#000"
      d="M12 12.713L.0 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5"
    />
  </svg>
</Obfuscate>