const GetInvolved = () => {
  return (
    <article className="max-w-7xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8 prose lg:prose-lg prose-teal bg-slate-100 text-slate-600">
      <h1 className="text-teal-600">Get Involved</h1>
      <p>
        People are at the heart of our work. The quality and extent of our work
        depends on the generosity of those who support us.
      </p>
      <p>
        There are lots of ways you can get involved in our charity work, and if
        you're already trying to pick between different charities for your
        company's next partnership, look no further - we can offer lots of
        rewarding activities for you and your colleagues.
      </p>

      <div className="m-0 p-0 lg:grid lg:grid-cols-2 lg:gap-8">
        <img
          className="rounded-lg shadow-lg object-cover object-center w-full col-start-2 row-start-1 aspect-[2/1] lg:aspect-square"
          src="/nathan-lemon-FBiKcUw_sQw-unsplash.jpg"
          alt=""
        />
        <div className="m-0 p-0 col-start-1">
          <h2 className="text-teal-600">Volunteer</h2>
          <p>
            Volunteers are an integral part of Graih's work. The drop-in is
            undoubtedly the place where most volunteers are needed. Volunteers
            get to spend time with our guests - from providing a warm welcome to
            helping serve the teas / coffees and lunch. Due to the unpredictable
            nature nature of the Drop-In, It can mean that sometimes we only
            have one or two guests through our doors - right through to
            overflowing.
          </p>
          <p>
            The role of a volunteer is to serve and contribute to keeping
            everything peaceful.
          </p>
          <p>
            If you are interested in volunteering and want more information, or
            if you have any questions, please do not hesitate to contact our
            volunteer co-ordinator: Yvette Armstrong (
            <a href="mailto:yvette@graih.org.im">yvette@graih.org.im</a>). All
            new volunteers will be given an induction before they start and will
            be required to have undergone a DBS check.
          </p>
        </div>
      </div>

      <h2 className="text-teal-600">Fundraise</h2>
      <p>
        Graih couldn't deliver the levels of service that it does without the
        generosity of the community. If you would like to get involved with
        fundraising for Graih, we have a range of ways for you to do so.
        <ul>
          <li>
            <strong className="text-slate-700">Organise your own event</strong>:
            From coffee mornings and bake sales, to family fun-days and much
            more, you can organise your own fundraising event in aid of Graih.
            Contact Erica Irwin (
            <a href="mailto:erica@graih.org.im">erica@graih.org.im</a>) for more
            information.
          </li>
          <li>
            <strong className="text-slate-700">Corporate fundraising</strong>
          </li>
          <li>
            <strong className="text-slate-700">Graih events</strong>
          </li>
        </ul>
      </p>
      
      <div className="m-0 p-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <img
            className="rounded-lg shadow-lg object-cover object-center w-full aspect-[2/1] lg:aspect-square"
            src="/katt-yukawa-K0E6E0a0R3A-unsplash.jpg"
            alt=""
          />
        <div><h2 className="text-teal-600">Donate</h2>
          <p>
            By donating, you can make a real and positive difference to our
            work, and in turn, to the lives of the people that we support.
          </p>
          <h3 className="text-teal-600">Ways you can donate</h3>

          <ul>
            <li>
              <strong>In person</strong>: Call in to the Drop-In (link to
              opening hours), to donate by cash or cheque (Cheques payable to:
              Graih).
            </li>
            <li>
              <strong>By post</strong>: Put address here
            </li>
            <li>
              <strong>Online</strong>:
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default GetInvolved;
