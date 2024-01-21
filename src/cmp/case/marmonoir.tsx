const Marmonoir = () => {
  return (
    <div
      className="flex-col mt-24 max-w-screen-lg justify-start ml-24 lg:ml-72 mr-12 
    animate-fade-down animate-duration-5000 animate-normal"
    >
      <div>
        <p className="font-helveticabold text-black tracking-tighterer text-3xl my-4 mx-1 mr-12">
          Marmonoir: a Dark Spell for Sad CS136 Students
        </p>
        <p className="max-w-fit font-helvetica text-black tracking-tighterer text-2xl mt-4 mx-1 mr-12">
          a UX/UI case study
        </p>
        <p className="font-helvetica text-grey tracking-tighterer text-xl my-4 mx-1 mr-12">
          by Hailey Chan • January 2024 • <a className="italic">as a </a>UX/UI
          Designer
        </p>
      </div>

      <div
        className="max-w-screen-md
      font-helvetica text-black tracking-tighter text-xl mt-24 my-4 mx-1 mr-12"
      >
        <p>
          The first client was me. I enrolled in the CS136 winter term at the
          University of Waterloo, where I found myself in anguished disbelief
          (re: a little frustrated) at the user interface of the code's
          automatic marking system. So much so that I decided to make my own.
        </p>
      </div>

      <div className="font-helvetica text-black tracking-tighter text-xl my-12 mx-1 mr-12 max-w-screen-md">
        <p className="font-helveticabold text-2xl tracking-tighterer">
          Defining the problem
        </p>
        <p>
          Marmoset is an online assessment collector for Computer Science
          assignments. It is primarily developed and used by the University of
          Waterloo. Marmoset's user interface is shown below:
        </p>
        <img
          className="sm:max-w-screen-sm md:max-w-screen-md"
          src="/images/marmonoir/vanillamarmoset.png"
        ></img>
        <p>
          We can quickly identify things that are very, very wrong with the
          interface. We remark (a) problems in the user flow and (b) interface
          nightmares.
          <a className="font-helveticabold"> The key inquiry: </a>
          How can we create an easier way for students to navigate the website,
          submit their work, and view their submissions more efficiently?
        </p>
      </div>

      <div className="font-helvetica text-black tracking-tighter text-xl my-12 mx-1 mr-12 max-w-screen-md">
        <p className="font-helveticabold text-2xl tracking-tighterer">
          Researching key problems
        </p>
        <p>
          While professors such as Cameron Morland have expressed their
          enthusiasm for Marmoset's functionality,
          <a className="italic"> some </a>students have remarked the
          difficult-to-use interface.{" "}
          <a className="text-grey text-lg">
            ("Some" is used to distinguish between two archetypes of
            programmers: people who concern themselves with interfaces, and
            people who do not. Nonetheless, it affects a portion of the student
            population.)
          </a>
        </p>
        <div className="sm:flex my-8 border-y-2 border-y-pink">
          {/* TESTIMONIAL ONE */}
          <div className="container max-w-screen-sm self-center my-2 mr-8">
            <p className="font-helvetica text-pink tracking-tighter text-lg text-left m-8">
              <a className="font-helveticabold">Why is marmoset so shit?</a>
              <br />
              Can anyone tell me why, I KEEP GETTING DEADLOCKS AFTER DEADLOCKS.
              They shud call it marmoshit tbh.
              <br />
              <br />
              <a className="italic">- r/imunexperienced, u/waterloo</a>
            </p>
          </div>
          {/* TESTIMONIAL TWO */}
          <div className="container max-w-screen-sm self-center my-2 mr-8">
            <p className="font-helvetica text-pink tracking-tighter text-lg text-left m-8">
              Being able to customize / more options for colour scheme would be
              nice.
              <br />
              <br />
              <a className="italic">- r/Darxen_, u/waterloo</a>
              <br />
            </p>
          </div>
        </div>
        <p>
          In addition, there exists a user interface extension,&nbsp;
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/marmoui/plhonglcpnmkaafmedmbcelnbjlkmfid"
            className="text-pink underline"
          >
            MarmoUI
          </a>
          , that attempts to rehash Marmoset's interface. The extension has over
          2,000+ users and a 4.8 rating, in addition to reviews such as:
        </p>
        <div className="my-8 border-y-2 border-y-pink w-screen-sm">
          <p className="font-helvetica text-pink tracking-tighter text-lg text-left m-8 leading-loose">
            marmoset is tolerable now :D <br />
            <a className="italic"> - Jesse Hoak</a>
            <br />
            <br /> This makes using marmoset... less painful, at least. Highly
            recommended.
            <br />
            <a className="italic"> - Kevin James</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marmonoir;
